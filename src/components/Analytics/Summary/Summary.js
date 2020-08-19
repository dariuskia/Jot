import React from 'react'
import { View, Text } from 'react-native'
import COLORS from '../../../utils/Colors'
import styles from './StylesSummary'
import EntryEmoji from '../../../../assets/img/summary/entries.svg'
import MessageEmoji from '../../../../assets/img/summary/messages.svg'
import SentimentEmoji from '../../../../assets/img/summary/sentiment.svg'
import GoalsEmoji from '../../../../assets/img/summary/goals.svg'

export default function Summary() {
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.item,
					styles.top,
					{ backgroundColor: COLORS.themed.gradient[0] },
				]}>
				<View style={styles.col}>
					<EntryEmoji />
				</View>
				<View style={styles.col}>
					<Text style={styles.subheading}>Entries</Text>
					<Text style={styles.value}>37</Text>
				</View>
			</View>
			<View
				style={[styles.item, { backgroundColor: COLORS.themed.gradient[1] }]}>
				<View style={styles.col}>
					<MessageEmoji />
				</View>
				<View style={styles.col}>
					<Text style={styles.subheading}>Messages</Text>
					<Text style={styles.value}>412</Text>
				</View>
			</View>
			<View
				style={[styles.item, { backgroundColor: COLORS.themed.gradient[2] }]}>
				<View style={styles.col}>
					<SentimentEmoji />
				</View>
				<View style={styles.col}>
					<Text style={styles.subheading}>Average sentiment</Text>
					<Text style={styles.value}>0.61</Text>
				</View>
			</View>
			<View
				style={[
					styles.item,
					styles.bottom,
					{ backgroundColor: COLORS.themed.gradient[3] },
				]}>
				<View style={styles.col}>
					<GoalsEmoji />
				</View>
				<View style={styles.col}>
					<Text style={styles.subheading}>Goals completed</Text>
					<Text style={styles.value}>23</Text>
				</View>
			</View>
		</View>
	)
}
