import React, { useState, useEffect } from 'react'
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat'
import {
	renderInputToolbar,
	renderActions,
	renderComposer,
	renderSend,
} from './Toolbar/InputToolbar'
import { View } from 'react-native'

import { TypingAnimation } from 'react-native-typing-animation'
import FlashMessage from 'react-native-flash-message'
import { showMessage, hideMessage } from 'react-native-flash-message'

import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'

import Header from '../Global/Header/Header'
import COLORS from '../../utils/Colors'
import genResponse from '../../api/ChatBot/ChatBot.js'
import { sentimentAnalysis } from '../../api/SentimentAnalysis/SentimentAnalysis'

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

export default function JournalPage({ navigation }) {
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
	const [reply, toggleReply] = useState(true)
	const [typing, setTyping] = useState(false)

	const handleReply = () => {
		let alert = !reply
			? { message: 'Enabled chat bot responses', type: 'success' }
			: { message: 'Disabled chat bot responses', type: 'danger' }
		toggleReply(!reply)
		setTyping(false)
		showMessage(alert)
	}

	//clear messages
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

	const getHighestAndAvg = () => {
		let output = { avg: null, highest: null }
		let total = 0
		let numItems = 0
		for (let msg of messages) {
			if (msg.user.name != 'JOT' && msg.sentiment != null) {
				numItems++
				total += msg.sentiment
				if (output.highest == null) {
					output.highest = msg
				} else {
					if (msg.sentiment > output.highest.sentiment) {
						output.highest = msg
					} else if (msg.sentiment == output.highest.sentiment) {
						if (msg.text.length > output.highest.text.length) {
							output.highest = msg
						}
					}
				}
			}
		}
		let avg = total / numItems
		output.avg = parseFloat(avg.toFixed(2))
		return output
	}

	//store messages
	const storeMessages = async () => {
		if (messages.length > 1) {
			let uuid = getUUID()
			let sentimentData = getHighestAndAvg()
			let firstMessageDate = new Date(
				messages[messages.length - 1]['createdAt']
			)
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

			const userRef = usersRef.doc(uuid)
			const userDoc = await userRef.get()
			if (userDoc.exists) {
				const [a, b, c, d] = [
					userDoc.data().entries,
					userDoc.data().messages,
					userDoc.data().avgSentiment,
					userDoc.data().goals,
				]

				const numMessages = (() => {
					return messages.filter((msg) => msg.user.name != 'Jot').length
				})()
				const newAvgSentiment = (() => {
					let newAvg = (c * a + sentimentData.avg) / (a + 1)
					return parseFloat(newAvg.toFixed(2))
				})()
				await userRef.set({
					entries: a + 1,
					messages: b + numMessages,
					avgSentiment: newAvgSentiment,
					goals: d,
				})
			} else {
				await userRef.set({
					entries: 1,
					messages: numMessages,
					avgSentiment: sentimentData.avg,
					goals: 0,
				})
			}

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
				highest: JSON.stringify(sentimentData.highest),
				sentiment: sentimentData.avg,
			})
		}
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

	const imageHandler = (uri) => {
		setTyping(false)
		let newMsg = {
			_id: genID(),
			createdAt: new Date(),
			image: uri,
			user: USER,
		}
		let newMessages = [newMsg, ...messages]
		updateMessages(newMessages)
		setMessages(newMessages)
	}

	const recvMessages = async () => {
		let uuid = getUUID()
		try {
			let newMessages = await AsyncStorage.getItem('@messages-' + uuid)
			if (newMessages != null) {
				setMessages(JSON.parse(newMessages))
			} else {
				setMessages(greeting)
				await AsyncStorage.setItem(
					'@messages-' + uuid,
					JSON.stringify(greeting)
				)
			}
		} catch (error) {
			console.log(error)
		}
	}
	function isNewDay() {
		let firstMessageDate = new Date(
			messages[messages.length - 1]['createdAt']
		).toDateString()
		return firstMessageDate != new Date().toDateString()
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
					if (isNewDay()) {
						storeMessages()
						clearMessages()
						recvMessages()
					}
				} else {
					recvMessages()
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
		let newMessages
		sentimentAnalysis(msg[0])
			.then((response) => {
				msg[0].sentiment = response
				newMessages = [msg[0], ...messages]
				setMessages(newMessages)
				updateMessages(newMessages)
				let text = msg[0].text
				if (reply) {
					setTyping(true)
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
			})
			.catch((error) => {
				console.log('ERROR', error)
			})
	}

	const renderBubble = (props) => {
		if (props.currentMessage._id === 'typing...')
			return (
				<Bubble
					{...props}
					renderCustomView={() => (
						<View
							style={{
								height: 30,
								length: 30,
							}}>
							<TypingAnimation
								dotMargin={5}
								dotSpeed={0.1}
								dotColor={'#aaaaaa'}
							/>
						</View>
					)}
					renderTime={() => <View />}
				/>
			)

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
			<Header
				title="Jot"
				locked={false}
				onclick={handleReply}
				enableChat={true}
				reply={reply}
				pageName="journal"
				navigation={navigation}
				source="Journal"
			/>
			<GiftedChat
				// messages={messages}
				messages={
					messages != null &&
					messages.length != 0 &&
					messages[0].user == USER &&
					typing
						? [
								{
									_id: 'typing...',
									createdAt: new Date(),
									text: '',
									user: JOT,
								},
								...messages,
						  ]
						: messages
				}
				onSend={(newMessage) => handleSend(newMessage)}
				// renderInputToolbar={() => {
				//   <TextInput editable={false} />
				// }}
				renderInputToolbar={renderInputToolbar}
				renderActions={renderActions}
				renderComposer={renderComposer}
				renderSend={renderSend}
				user={USER}
				placeholder="Type a message..."
				showUserAvatar
				renderBubble={renderBubble}
				sendImage={imageHandler}
			/>
			<FlashMessage />
		</View>
	)
}
