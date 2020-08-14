import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './StylesPersonalize'
import { NavigationContainer } from '@react-navigation/native'
import { LoginButton } from '../Login/LoginPage'

export default function PersonalizePage({ navigation }) {
	const [name, updateName] = useState()

	const setName = (name) => {
		let user = auth().currentUser
		user.updateProfile({ displayName: name })
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>What should we call you?</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your name"
				underlineColorAndroid="#A2A5BD"
				placeholderTextColor="#A2A5BD"
				onChangeText={(text) => {
					updateName(text)
				}}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => {
						setName(name)
						setTimeout(() => navigation.navigate('Home'), 1000)
					}}>
					<LoginButton color="#5382C8" text="Save" />
				</TouchableOpacity>
			</View>
		</View>
	)
}
