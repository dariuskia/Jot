import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'
import auth from '@react-native-firebase/auth'

import Header from '../../Global/Header/Header'
import COLORS from '../../../utils/Colors'

export default function EntryPage({ navigation, route }) {
	const [messages, setMessages] = useState(JSON.parse(route.params.messages))
	const [username, setName] = useState()

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

	return (
		<View style={{ flex: 1 }}>
			<Header title="Jot" locked={false} navigation={navigation} back />
			<GiftedChat
				messages={messages}
				// onSend={(newMessage) => handleSend(newMessage)}
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