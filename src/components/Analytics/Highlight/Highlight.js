import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './StylesHighlight'
import MessageVector from '../../../../assets/img/highlight/messagevector.svg'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default function Highlight() {
	const getUUID = () => {
		let uuid = auth().currentUser.uid
		return uuid
	}

	const getDates = () => {
		let val = []
		let today = new Date()
		let [year, month, date] = [
			today.getFullYear(),
			today.getMonth(),
			today.getDate(),
		]
		let firstDate = date - 7
		for (let i = firstDate; i < date; i++) {
			val.push(new Date(year, month, i))
		}
		return val
	}

	const [uuid, setUUID] = useState(getUUID())
	const [day, setDay] = useState()
	const [time, setTime] = useState()

	const [highestMessages, setHighestMessages] = useState([])
	const [highest, setHighest] = useState()

	const [weekDates, setDates] = useState(getDates())

	function setDateString(date) {
		let hour = date.getHours()
		let amorpm = hour > 12 ? 'PM' : 'AM'
		hour = hour % 12
		let minutes = date.getMinutes()
		minutes = minutes.toString()
		minutes = minutes.length > 1 ? minutes : '0' + minutes
		const dotw = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]
		let day = dotw[date.getDay()]
		setDay(day)
		setTime(hour + ':' + minutes + ' ' + amorpm)
	}

	function getHighest(msgs) {
		let highest
		for (let msg of msgs) {
			if (msg.sentiment != null) {
				if (highest == null) {
					highest = msg
				} else {
					if (msg.sentiment > highest.sentiment) {
						highest = msg
					} else if (msg.sentiment == highest.sentiment) {
						if (msg.text.length > highest.text.length) {
							highest = msg
						}
					}
				}
			}
		}
		return highest
	}

	useEffect(() => {
		// if (!received) {
		;(async function () {
			let testList = []
			weekDates.forEach(async (date) => {
				const dayRef = firestore()
					.collection('users')
					.doc(uuid)
					.collection('messages')
					.doc(date.getFullYear().toString())
					.collection('months')
					.doc(date.getMonth().toString())
					.collection('days')
					.doc(date.getDate().toString())
				const dayDoc = await dayRef.get()
				if (dayDoc.exists) {
					if (dayDoc.data().highest != null) {
						setHighestMessages((prevMessages) => [
							...prevMessages,
							JSON.parse(dayDoc.data().highest),
						])
					}
				}
			})
		})()
	}, [])

	useEffect(() => {
		let highest = getHighest(highestMessages)
		if (highest != null) {
			setDateString(new Date(highest.createdAt))
			setHighest(highest['text'])
		}
	})

	return (
		<View style={styles.container}>
			{highest != null ? (
				<View>
					<View style={[styles.innerContainer, { alignItems: 'center' }]}>
						<Text style={styles.timestamp}>
							<Text style={{ fontWeight: 'bold' }}>{day}</Text> {time}
						</Text>
					</View>
					<View style={[styles.innerContainer, { alignItems: 'flex-end' }]}>
						<View style={styles.bubble}>
							<Text style={styles.text}>{highest}</Text>
						</View>
						<View>
							<MessageVector style={styles.vector} />
						</View>
					</View>
				</View>
			) : (
				<View></View>
			)}
		</View>
	)
}
