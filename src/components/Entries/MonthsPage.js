import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Styles'
import { createStackNavigator } from '@react-navigation/stack';
import Month from './Month/Month'
import Header from '../Global/Header/Header'
import firestore from '@react-native-firebase/firestore'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function MonthsPage({ navigation }) {
	const [year, setYear] = useState(new Date().getFullYear().toString())
	const [months, setMonths] = useState([])

	useEffect(() => {
		(async function() {
			// const testDate = new Date(2020, 7, 2)
			// let [entryYear, entryMonth, entryDay] = [testDate.getFullYear(), testDate.getMonth(), testDate.getDate()].map(num => num.toString())
			
			// let messagesRef = firestore().collection('users').doc('Soeonz5yjvXhkofc8KKsmpyQbtB3').collection('messages')
			// let monthRef = messagesRef.doc(entryYear).collection('months').doc(entryMonth)
			// let newEntryRef = monthRef.collection('days').doc(entryDay)
		
			// await monthRef.set({monthName: monthNames[parseInt(entryMonth)], monthNum: parseInt(entryMonth)})
			// await newEntryRef.set({messages: JSON.stringify([{text: "", user: "JOT"}, {text: "hi yep", user: "User"}]), dayNum: parseInt(entryDay)})

			let messagesRef = firestore().collection('users').doc('Soeonz5yjvXhkofc8KKsmpyQbtB3').collection('messages')
			let monthsRef = messagesRef.doc(year).collection('months')
			let monthsDoc = await monthsRef.get()
			let output = monthsDoc.docs.map(doc => doc.data())
			setMonths(output)
		})()
	}, [])

	return (months.length != 0 ? (
		<View style={{ flex: 1 }}>
			<Header title="Entries" page="MonthsPage" />
			<View style={{ marginTop: 15 }}>
				{months.map(month => (
					<TouchableOpacity onPress={() => navigation.navigate("DaysPage", {month: month})} key={month.monthName+year} >
						<Month month={month.monthName} year={year} key={month.monthName+year} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	) : (
		<View style={{ flex: 1 }}>
			<Header title="Entries" page="Entries" />
			<Text>Couldn't find any entries. Start writing in the journal!</Text>
		</View>
	))

}