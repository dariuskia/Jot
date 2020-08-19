import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import styles from './StylesAnalyticsPage'
import Header from '../Global/Header/Header'
import Moods from './Moods/Moods.js'

export default function AnalyticsPage({ navigation }) {
	return (
		<View style={styles.container}>
			<Header title="Analytics" />
			<View style={styles.body}>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>Last Week</Text>
					<Moods />
				</View>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>Best Moment</Text>
				</View>
			</View>
		</View>
	)
}
