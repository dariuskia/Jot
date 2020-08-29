import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import styles from './StylesAnalyticsPage'
import Moods from './Moods/Moods'
import Summary from './Summary/Summary'
import Highlight from './Highlight/Highlight'
import Header from './Header/HeaderAnalytics'

export default function AnalyticsPage({ navigation }) {
	return (
		<View style={styles.container}>
			<Header title="Analytics" />
			<ScrollView style={styles.body}>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>Moods</Text>
					<Moods />
				</View>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>Highlight of the Week</Text>
					<Highlight />
				</View>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>All Time Summary</Text>
					<Summary />
				</View>
			</ScrollView>
		</View>
	)
}
