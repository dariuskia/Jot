import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'
import { createStackNavigator } from '@react-navigation/stack';
import Month from './Month/Month'
import Header from '../Global/Header/Header'

const Stack = createStackNavigator();

export default function CalendarPage() {

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