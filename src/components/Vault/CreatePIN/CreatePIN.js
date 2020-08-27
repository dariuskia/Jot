import React, { useState } from 'react'
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../Styles.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage'

export default function CreatePIN({ navigation }) {
	const [input, setInput] = useState('')

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.back}
				onPress={() => navigation.navigate({ name: 'DaysPage' })}>
				<Icon name="chevron-left" color="#fff" size={40} />
			</TouchableOpacity>
			<Text style={styles.heading}>Create PIN</Text>
			<Text style={styles.subheading}>
				Hi, this is your first time storing an entry in the vault. Please create
				a PIN to store your entries.
			</Text>
			<TextInput
				style={styles.pinContainer}
				placeholder="PIN"
				textAlign={'center'}
				value={input}
				maxLength={4}
				autoFocus={true}
				// caretHidden={true}
				keyboardType="number-pad"
				placeholderTextColor="rgba(255, 255, 255, 0.5)"
			/>
			<TextInput
				style={styles.pinContainer}
				placeholder="Confirm PIN"
				textAlign={'center'}
				value={input}
				maxLength={4}
				autoFocus={true}
				// caretHidden={true}
				keyboardType="number-pad"
				placeholderTextColor="rgba(255, 255, 255, 0.5)"
			/>
		</View>
	)
}
