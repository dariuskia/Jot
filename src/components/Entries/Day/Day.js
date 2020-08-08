import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { styles } from './StylesDay'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Day({ day, month, year }) {
	const [locked, setLocked] = useState(true)
	return (
		<View>
			<View style={styles().container}>
				<DayIcon day={day.dayNum} month={month.monthNum} year={Number(year)} />
				<View style={styles().dateAndLock}>
					<Text style={styles().text}>
						{month.monthName} {day.dayNum}
					</Text>
					<View style={{}}>
						{locked ? (
							<Icon name="lock" color="rgba(0, 0, 0, 0.5)" size={25} />
						) : (
							<View style={{ width: 25, height: 25 }} />
						)}
					</View>
				</View>
			</View>
		</View>
	)
}

function DayIcon({ day, month, year }) {
	let dotw = new Date(year, month, day).getDay()
	let days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']

	return (
		<View style={styles().dayIcon}>
			<Text style={styles().iconText}>{days[dotw]}</Text>
		</View>
	)
}
