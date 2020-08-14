import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import styles from '../Login/StylesLoginPage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from '../../../../assets/img/landingarrow.svg'
import { LoginButton } from '../Login/LoginPage'

function register(email, password, confirmPassword) {
	if (password == confirmPassword) {
		if (password.length >= 6) {
			auth()
				.createUserWithEmailAndPassword(email, password)
				.catch(function (error) {
					var errorCode = error.code
					var errorMessage = error.message
					console.log(errorCode, errorMessage)
				})
		} else {
			Alert.alert(
				'Invalid password',
				'Password must be at least 6 characters. Please re-enter a new password.',
				[{ text: 'Ok' }]
			)
		}
	} else {
		Alert.alert(
			'Invalid password',
			'Passwords do not match. Please re-enter a new password.',
			[{ text: 'Ok' }]
		)
	}
}

export default function RegisterPage({ navigation }) {
	function Input({ place, setMethod }) {
		return (
			<TextInput
				style={styles.input}
				placeholder={place}
				underlineColorAndroid="#A2A5BD"
				placeholderTextColor="#A2A5BD"
				onSubmitEditing={(val) => {
					setMethod(val.nativeEvent.text)
				}}
			/>
		)
	}

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [confirmPassword, setConfirmPassword] = useState()

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{ padding: 10, position: 'absolute', left: 27, top: 20 }}
				onPress={() => navigation.goBack()}>
				<Arrow />
			</TouchableOpacity>
			<View style={styles.header}>
				<Text style={styles.heading}>Register</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
					onChangeText={(text) => {
						setEmail(text)
					}}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
					secureTextEntry={true}
					onChangeText={(text) => {
						setPassword(text)
					}}
				/>
				<TextInput
					style={styles.input}
					placeholder="Confirm password"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
					secureTextEntry={true}
					onChangeText={(text) => {
						setConfirmPassword(text)
					}}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => register(email, password, confirmPassword)}>
					<LoginButton color="#318155" text="Create Account" />
				</TouchableOpacity>
			</View>
		</View>
	)
}
