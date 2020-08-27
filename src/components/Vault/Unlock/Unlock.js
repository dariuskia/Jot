import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Button,
	BackHandler,
} from 'react-native'
import styles from '../Styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CreatePIN from '../CreatePIN/CreatePIN'

export default function Unlock({ navigation, route }) {
	BackHandler.addEventListener('hardwareBackPress', function () {
		navigation.navigate({ name: 'DaysPage' })
		return true
	})
	const getPIN = () => {
		return '1010'
	}

	const [input, setInput] = useState('')

	const [PIN, setPIN] = useState(getPIN())

	const [wrongPIN, setWrong] = useState(false)

	const verifyPIN = (x) => {
		if (x.length == PIN.length) {
			if (x == PIN) {
				route.params.monthUnlockHandler(true)
				route.params.dayUnlockHandler(true)
				navigation.goBack()
			} else {
				setWrong(true)
			}
			setInput('')
		}
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.back}
				onPress={() => navigation.navigate({ name: 'DaysPage' })}>
				<Icon name="chevron-left" color="#fff" size={40} />
			</TouchableOpacity>
			<Text style={styles.heading}>Please enter PIN to continue</Text>
			<TextInput
				style={styles.pinContainer}
				placeholder="PIN"
				textAlign={'center'}
				value={input}
				maxLength={4}
				autoFocus={true}
				caretHidden={true}
				keyboardType="number-pad"
				placeholderTextColor="rgba(255, 255, 255, 0.5)"
				onChangeText={(val) => {
					let allowed = '0123456789'.split('')
					let ret = true
					for (let b of val) if (!allowed.includes(b)) ret = false
					if (ret) {
						setInput(val)
						verifyPIN(val)
					}
				}}
			/>
			{wrongPIN && (
				<View>
					<Text style={styles.wrong}>Incorrect PIN, please try again.</Text>
				</View>
			)}
		</View>
	)
}
