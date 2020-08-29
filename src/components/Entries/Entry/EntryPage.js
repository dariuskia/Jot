import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'

import Header from './HeaderEntryPage'
import COLORS from '../../../utils/Colors'

export default function EntryPage({ navigation, route }) {
	const [messages, setMessages] = useState(JSON.parse(route.params.messages))
	const [username, setName] = useState()
	const [locked, toggleLock] = useState(false)

	useEffect(() => {
		let displayName = auth().currentUser.displayName
		setName(displayName)
	}, [])

	const handleLock = () => {
		toggleLock(!locked)
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

	if (route.params.locked) {
		if (!route.params.unlocked) {
			navigation.navigate('Unlock', {
				monthUnlockHandler: route.params.monthUnlockHandler,
				dayUnlockHandler: route.params.dayUnlockHandler,
				source: 'DaysPage',
			})
		}
	}

	return (
		<View style={{ flex: 1 }}>
			<Header
				title="Jot"
				locked={locked}
				handleLock={handleLock}
				navigation={navigation}
				back
			/>
			<GiftedChat
				messages={messages}
				renderInputToolbar={() => <TextInput editable={false} />}
				user={{
					_id: 1,
					name: username,
				}}
				placeholder="Type a message..."
				showUserAvatar
				renderBubble={renderBubble}
			/>
		</View>
	)
}
