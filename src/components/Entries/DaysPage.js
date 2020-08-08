import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
//import styles from './Styles'
import Day from './Day/Day'
import Header from '../Global/Header/Header'
import firestore from '@react-native-firebase/firestore'

export default function DaysPage({ route, navigation }) {
	const [year, setYear] = useState(new Date().getFullYear().toString())
	const [month, setMonth] = useState(route.params.month)
	const [days, setDays] = useState([])
	const [storageReceived, setReceived] = useState(false)

	useEffect(() => {
		;(async function () {
			let messagesRef = firestore()
				.collection('users')
				.doc('Soeonz5yjvXhkofc8KKsmpyQbtB3')
				.collection('messages')
			let monthsRef = messagesRef.doc(year).collection('months')
			let daysRef = monthsRef.doc(month.monthNum.toString()).collection('days')
			let daysDoc = await daysRef.get()
			let output = daysDoc.docs.map((doc) => doc.data())
			setDays(output)
		})()
	}, [])

	return days.length != 0 ? (
		<View style={{ flex: 1 }}>
			<Header title={month.monthName} page="DaysPage" navigation={navigation} />
			<View style={{ marginTop: 15 }}>
				{days.map((day) => (
					<TouchableOpacity
						key={day.dayNum}
						onPress={() =>
							navigation.navigate('EntryPage', { messages: day.messages })
						}>
						<Day day={day} month={month} year={year} key={day.dayNum} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	) : (
		<View style={{ flex: 1 }}>
			<Header title={month.monthName} page="DaysPage" navigation={navigation} />
			<Text>Couldn't find any entries. Start writing in the journal!</Text>
		</View>
	)
}
