import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './StyleCard'

export default function Card({ day, mood = '?' }) {
	return (
		<View style={styles(mood).container}>
			<Text>{mood}</Text>
			<Text style={styles(mood).text}>{day}</Text>
		</View>
	)
}
