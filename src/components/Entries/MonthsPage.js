import React, { useState, useEffect } from 'react'
import { Text, ScrollView, View, TouchableOpacity } from 'react-native'
import styles from './Styles'
import Month from './Month/Month'
import Header from '../Global/Header/Header'
import firestore from '@react-native-firebase/firestore'
import { Picker } from '@react-native-community/picker'
import auth from '@react-native-firebase/auth'

export default function MonthsPage({ navigation, route }) {
	const { tabNavigation } = route.params
	const [years, setYears] = useState()
	const [year, setYear] = useState(new Date().getFullYear().toString())
	const [months, setMonths] = useState([])

	const getUUID = () => {
		let uuid = auth().currentUser.uid
		return uuid
	}

	useEffect(() => {
		let uuid = getUUID()
		;(async function () {
			let messagesRef = firestore()
				.collection('users')
				.doc(uuid)
				.collection('messages')
			let yearsDoc = await messagesRef.get()
			let yearsList = yearsDoc.docs.map((doc) => doc.data().yearName)
			setYears(yearsList)

			let monthsRef = messagesRef.doc(year).collection('months')
			let monthsDoc = await monthsRef.orderBy('monthNum', 'asc').get()
			let monthsList = monthsDoc.docs.map((doc) => doc.data())
			setMonths(monthsList)
		})()
	}, [year])

	return months.length != 0 ? (
		<View style={{ flex: 1 }}>
			<Header title="Entries" />
			<ScrollView style={{ marginTop: 15 }}>
				<Picker
					selectedValue={year}
					style={{ height: 50, width: 120, marginLeft: 20 }}
					onValueChange={(itemValue) => setYear(itemValue)}>
					{years &&
						years.map((yearVal) => (
							<Picker.Item label={yearVal} value={yearVal} key={yearVal} />
						))}
				</Picker>
				{months.map((month) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('DaysPage', { month: month })}
						key={month.monthName + year}>
						<Month
							month={month.monthName}
							year={year}
							key={month.monthName + year}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	) : (
		<View style={{ flex: 1 }}>
			<Header title="Entries" page="MonthsPage" />
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 19, fontWeight: '500' }}>
					No entries available
				</Text>
				<TouchableOpacity onPress={() => tabNavigation.navigate('Journal')}>
					<Text style={{ padding: 5, fontSize: 15, color: '#1658bc' }}>
						Begin writing in the journal page.
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
