import React, { useState, useEffect } from 'react'
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat'
import { View } from 'react-native'

import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-community/async-storage'

import Header from '../Global/Header/Header'
import COLORS from '../../utils/Colors'

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
			setMessages([])
			await AsyncStorage.removeItem('@messages')
		} catch (error) {
			console.log(error)
		}
	}

	const storeMessages = async () => {
		let firstMessageDate = new Date(messages[messages.length - 1]['createdAt'])
		let [entryYear, entryMonth, entryDay] = [
			firstMessageDate.getFullYear(),
			firstMessageDate.getMonth(),
			firstMessageDate.getDate(),
		].map((num) => num.toString())

		let messagesRef = firestore()
			.collection('users')
			.doc('Soeonz5yjvXhkofc8KKsmpyQbtB3')
			.collection('messages')
		let monthRef = messagesRef
			.doc(entryYear)
			.collection('months')
			.doc(entryMonth)
		let newEntryRef = monthRef.collection('days').doc(entryDay)

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
		try {
			await AsyncStorage.setItem('@messages', JSON.stringify(newMessages))
		} catch (error) {
			console.log(error)
		}
	}

	const recvMessages = async (initialMessages) => {
		try {
			let newMessages = await AsyncStorage.getItem('@messages')
			if (newMessages != null) {
				setMessages(JSON.parse(newMessages))
			} else {
				setMessages(greeting)
				await AsyncStorage.setItem('@messages', JSON.stringify(initialMessages))
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getUsername = async () => {
		try {
			let val = await AsyncStorage.getItem('@username')
			setUsername(val)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		;(async () => {
			try {
				getUsername()
				USER.name = username
				if (messages != null) {
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
		if (text == 'gm') {
			setMessages((prevMessages) =>
				GiftedChat.append(prevMessages, {
					_id: genID(),
					createdAt: new Date(),
					text: 'good morning!',
					user: JOT,
				})
			)
		}
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
