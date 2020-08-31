import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import Header from './HeaderEntryPage'
import COLORS from '../../../utils/Colors'

export default function EntryPage({ navigation, route }) {
	const getUUID = () => {
		let u = auth().currentUser.uid
		return u
	}

	const [messages, setMessages] = useState(JSON.parse(route.params.messages))
	const [username, setName] = useState()
	const [locked, setLocked] = useState(route.params.locked)
	const [uuid, setUUID] = useState(getUUID())
	const [ymd, setymd] = useState(route.params.ymd)

	const updateLocked = async () => {
		let ref = firestore()
			.collection('users')
			.doc(uuid)
			.collection('messages')
			.doc(ymd[0])
			.collection('months')
			.doc(ymd[1].toString())
			.collection('days')
			.doc(ymd[2].toString())
		await ref.update({ locked: !locked })
		route.params.refreshDays()
		setLocked(!locked)
	}

	const lockHandler = async () => {
		let doc = await firestore().collection('users').doc(uuid).get()

		if (!locked && doc.data().PIN == null) {
			navigation.navigate('CreatePIN', { callback: updateLocked })
		} else {
			updateLocked()
		}
	}

	const backHandler = () => {
		navigation.goBack()
	}

	useEffect(() => {
		let displayName = auth().currentUser.displayName
		setName(displayName)
	}, [])

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
	useEffect(() => {
		if (route.params.locked) {
			if (!route.params.unlocked) {
				navigation.navigate('Unlock', {
					monthUnlockHandler: route.params.monthUnlockHandler,
					dayUnlockHandler: route.params.dayUnlockHandler,
					source: 'DaysPage',
				})
			}
		}
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<Header
				title="Jot"
				locked={locked}
				lockHandler={lockHandler}
				backHandler={backHandler}
				back
			/>
			<GiftedChat
				messages={messages}
				renderInputToolbar={() => <View />}
				user={{
					_id: 1,
					name: username,
				}}
				placeholder=""
				showUserAvatar
				renderBubble={renderBubble}
			/>
		</View>
	)
}
