import React, { useState, useEffect } from 'react'
import { Text, ScrollView, View, TouchableOpacity } from 'react-native'
//import styles from './Styles'
import Day from './Day/Day'
import Header from './HeaderDay'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export default function DaysPage({ route, navigation }) {
	const [year, setYear] = useState(new Date().getFullYear().toString())
	const [month, setMonth] = useState(route.params.month)
	const [days, setDays] = useState([])
	const [storageReceived, setReceived] = useState(false)
	const [unlocked, setUnlocked] = useState(false)

	const getUUID = () => {
		let uuid = auth().currentUser.uid
		return uuid
	}
	const refresh = () => {
		let uuid = getUUID()
		;(async function () {
			let messagesRef = firestore()
				.collection('users')
				.doc(uuid)
				.collection('messages')
			let monthsRef = messagesRef.doc(year).collection('months')
			let daysRef = monthsRef.doc(month.monthNum.toString()).collection('days')
			let daysDoc = await daysRef.orderBy('dayNum', 'asc').get()
			let output = daysDoc.docs.map((doc) => doc.data())
			setDays(output)
		})()
	}

	useEffect(() => {
		refresh()
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<Header title={month.monthName} navigation={navigation} back />
			<ScrollView style={{ marginTop: 15 }}>
				{days.map((day) => (
					<TouchableOpacity
						key={day.dayNum}
						onPress={() =>
							navigation.navigate('EntryPage', {
								messages: day.messages,
								monthUnlockHandler: route.params.monthUnlockHandler,
								dayUnlockHandler: setUnlocked,
								unlocked: route.params.monthUnlocked || unlocked,
								locked: day.locked,
								refreshDays: refresh,
								ymd: [year, month.monthNum, day.dayNum],
							})
						}>
						<Day
							day={day}
							month={month}
							year={year}
							key={day.dayNum}
							locked={day.locked}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	)
}
