import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './StylesMonth'
import COLORS from '../../../utils/Colors'

export default function Month({ month, year }) {
	let colors = COLORS.months

	return (
		<View style={styles(colors[month]).container}>
			<View>
				<Text style={styles().text}>{month}</Text>
			</View>
		</View>
	)
}
