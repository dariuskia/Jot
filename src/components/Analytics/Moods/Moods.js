import React, { useState, useEffect } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import Card from './Card/Card'

export default function Mood() {
	const getUUID = () => {
		let uuid = auth().currentUser.uid
		return uuid
	}

	const [uuid, setUUID] = useState(getUUID())

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
	const [weekDates, setDates] = useState(getDates())

	const [days, setDays] = useState([])

	const dotw = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']

	const [received, setReceived] = useState(false)

	useEffect(() => {
		if (!received) {
			;(async function () {
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
					if (!dayDoc.exists) {
						setDays((prevDays) => [...prevDays, { day: dotw[date.getDay()] }])
					} else {
						setDays((prevDays) => [
							...prevDays,
							{
								sentiment: Math.ceil(dayDoc.data().sentiment / 0.2),
								day: dotw[date.getDay()],
							},
						])
					}
				})
			})()
			setReceived(true)
		}
	}, [])

	return (
		<ScrollView horizontal={true}>
			{days.map((day) => (
				<Card day={day.day} mood={day.sentiment && day.sentiment} />
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({})
