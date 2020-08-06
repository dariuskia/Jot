import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'
import { createStackNavigator } from '@react-navigation/stack';
import Month from './Month/Month'
import Header from '../Global/Header/Header'
import firestore from '@react-native-firebase/firestore'

const Stack = createStackNavigator();

export default function CalendarPage() {
	(async () => {
		const ref = await firestore().collection('messages').doc('years').collection('yearList').doc('2020').collection('months').get()
		console.log(ref.docs.map(doc => doc.data()))
	})()

	let months = ['May', 'June', 'July']
	return (
		<View style={{ flex: 1 }}>
			<Header title="Calendar" page="Calendar" />
			{months.map(month => {
				return <Month month={month} year='2021' />
			})}
		</View>
	)
}