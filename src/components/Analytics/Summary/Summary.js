import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import COLORS from '../../../utils/Colors'
import styles from './StylesSummary'
import EntryEmoji from '../../../../assets/img/summary/entries.svg'
import MessageEmoji from '../../../../assets/img/summary/messages.svg'
import SentimentEmoji from '../../../../assets/img/summary/sentiment.svg'
import GoalsEmoji from '../../../../assets/img/summary/goals.svg'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default function Summary() {
	const [uuid, setuuid] = useState(auth().currentUser.uid)
	const [entries, setEntries] = useState(0)
	const [messages, setMessages] = useState(0)
	const [avgSentiment, setAvgSentiment] = useState(0)
	const [goals, setGoals] = useState(0)

	useEffect(() => {
		;(async function () {
			const ref = await firestore().collection('users').doc(uuid).get()
			if (ref.exists) {
				setEntries(ref.data().entries)
				setMessages(ref.data().messages)
				setAvgSentiment(ref.data().avgSentiment)
				setGoals(ref.data().goals)
			}
		})()
	}, [])

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
					<Text style={styles.value}>{entries}</Text>
				</View>
			</View>
			<View
				style={[styles.item, { backgroundColor: COLORS.themed.gradient[1] }]}>
				<View style={styles.col}>
					<MessageEmoji />
				</View>
				<View style={styles.col}>
					<Text style={styles.subheading}>Messages</Text>
					<Text style={styles.value}>{messages}</Text>
				</View>
			</View>
			<View
				style={[styles.item, { backgroundColor: COLORS.themed.gradient[2] }]}>
				<View style={styles.col}>
					<SentimentEmoji />
				</View>
				<View style={styles.col}>
					<Text style={styles.subheading}>Average sentiment</Text>
					<Text style={styles.value}>{avgSentiment}</Text>
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
					<Text style={styles.value}>{goals}</Text>
				</View>
			</View>
		</View>
	)
}
