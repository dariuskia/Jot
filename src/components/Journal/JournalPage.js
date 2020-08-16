import React, { useState, useEffect } from 'react'
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat'
import { View } from 'react-native'

import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'

import Header from '../Global/Header/Header'
import COLORS from '../../utils/Colors'
import genResponse from './Bot/Bot.js'

function genID(length = 30) {
	var result = ''
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	var charactersLength = characters.length
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

const JOT = {
	_id: 2,
	name: 'Jot',
}
const USER = {
	_id: 1,
	name: '',
}

export default function JournalPage() {
	const greeting = [
		{
			_id: 1,
			text: 'Hi there! Type some messages to get started.',
			user: JOT,
			createdAt: new Date(),
		},
	].reverse()
	const [username, setUsername] = useState(null)
	const [messages, setMessages] = useState()
	const [storageReceived, alreadyReceived] = useState(false)

	const clearMessages = async () => {
		try {
			let uuid = getUUID()
			setMessages([])
			await AsyncStorage.removeItem('@messages-' + uuid)
		} catch (error) {
			console.log(error)
		}
	}

	const getUUID = () => {
		let uuid = auth().currentUser.uid
		return uuid
	}

	const storeMessages = async () => {
		let uuid = getUUID()
		let firstMessageDate = new Date(messages[messages.length - 1]['createdAt'])
		let [entryYear, entryMonth, entryDay] = [
			firstMessageDate.getFullYear(),
			firstMessageDate.getMonth(),
			firstMessageDate.getDate(),
		].map((num) => num.toString())

		let usersRef = firestore().collection('users')

		let messagesRef = usersRef.doc(uuid).collection('messages')
		let monthRef = messagesRef
			.doc(entryYear)
			.collection('months')
			.doc(entryMonth)
		let newEntryRef = monthRef.collection('days').doc(entryDay)

		await usersRef.doc(uuid).set({
			invisField: 'true',
		})

		await messagesRef.doc(entryYear).set({
			yearName: entryYear,
		})

		await monthRef.set({
			monthName: monthNames[parseInt(entryMonth)],
			monthNum: parseInt(entryMonth),
		})
		await newEntryRef.set({
			messages: JSON.stringify(messages),
			dayNum: parseInt(entryDay),
		})
	}

	const updateMessages = async (newMessages) => {
		let uuid = getUUID()
		try {
			await AsyncStorage.setItem(
				'@messages-' + uuid,
				JSON.stringify(newMessages)
			)
		} catch (error) {
			console.log(error)
		}
	}

	const recvMessages = async (initialMessages) => {
		let uuid = getUUID()
		try {
			let newMessages = await AsyncStorage.getItem('@messages-' + uuid)
			if (newMessages != null) {
				setMessages(JSON.parse(newMessages))
			} else {
				setMessages(greeting)
				await AsyncStorage.setItem(
					'@messages-' + uuid,
					JSON.stringify(initialMessages)
				)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getUsername = () => {
		let displayName = auth().currentUser.displayName
		setUsername(displayName)
	}

	useEffect(() => {
		;(async () => {
			try {
				getUsername()
				getUUID()
				USER.name = username
				if (!(messages == null || messages.length == 0)) {
					let firstMessageDate = new Date(
						messages[messages.length - 1]['createdAt']
					).toDateString()
					if (firstMessageDate != new Date().toDateString()) {
						storeMessages()
						clearMessages()
						recvMessages(greeting)
					}
				} else {
					recvMessages(greeting)
				}
				if (!storageReceived) {
					console.log('receiving')
					recvMessages()
					alreadyReceived(true)
				}
			} catch (error) {
				console.log(error)
			}
		})()
	})

	// helper method that sends a message
	function handleSend(msg = []) {
		let newMessages = [msg[0], ...messages]
		setMessages(newMessages)
		updateMessages(newMessages)
		let text = msg[0].text
		genResponse(text).then((response) => {
			let nextMessages = [
				{
					_id: genID(),
					createdAt: new Date(),
					text: response,
					user: JOT,
				},
				...newMessages,
			]
			setMessages(nextMessages)
			updateMessages(nextMessages)
		})
	}

	const renderBubble = (props) => {
		return (
			<Bubble
				{...props}
				wrapperStyle={{
					left: {
						backgroundColor: COLORS.backgroundGray,
					},
					right: {
						backgroundColor: COLORS.themed.secondary,
					},
				}}
				textStyle={{
					left: {
						fontFamily: 'Rubik',
						fontSize: 16,
					},
					right: {
						fontFamily: 'Rubik',
						fontSize: 16,
					},
				}}
			/>
		)
	}

	return (
		<View style={{ flex: 1 }}>
			<Header title="Jot" locked={false} />
			<GiftedChat
				messages={messages}
				onSend={(newMessage) => handleSend(newMessage)}
				// renderInputToolbar={() => {
				//   <TextInput editable={false} />
				// }}
				user={USER}
				placeholder="Type a message..."
				showUserAvatar
				renderBubble={renderBubble}
			/>
		</View>
	)
}
