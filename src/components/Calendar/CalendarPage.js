import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'
import { createStackNavigator } from '@react-navigation/stack';
import Months from './Months'
import Header from '../Global/Header/Header'

const Stack = createStackNavigator();

export default function CalendarPage() {
	return (
		<View style={{ flex: 1 }}>
			<Header title="Calendar" page="Calendar" />
			<View style={styles.container}>
				<View style={styles.monthContainer}>
					<Text style={styles.monthText}>May 2020</Text>
				</View>
			</View >
		</View>
	)
}