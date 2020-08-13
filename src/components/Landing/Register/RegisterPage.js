import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../Login/StylesLoginPage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from '../../../../assets/img/landingarrow.svg'
import { LoginButton } from '../Login/LoginPage'

export default function RegisterPage({ navigation }) {
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
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
					secureTextEntry={true}
				/>
				<TextInput
					style={styles.input}
					placeholder="Confirm password"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
					secureTextEntry={true}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity>
					<LoginButton color="#318155" text="Create Account" />
				</TouchableOpacity>
			</View>
		</View>
	)
}
