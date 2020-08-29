import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	BackHandler,
} from 'react-native'
import styles from '../Styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default function CreatePIN({ navigation, route }) {
	BackHandler.addEventListener('hardwareBackPress', function () {
		navigation.navigate({ name: route.params.source })
		return true
	})

	const pinLength = 4

	const [input, setInput] = useState('')

	const [PIN, setPIN] = useState()

	const [place, setPlace] = useState('Enter')

	const [unmatchedPIN, setUnmatched] = useState(false)

	const uploadPin = (PIN) => {
		let user = auth().currentUser
		user.updateProfile({ PIN: PIN })
	}

	const enterPIN = (x) => {
		if (x.length == pinLength) {
			if (PIN != null) {
				if (x == PIN) {
					navigation.goBack()
				} else {
					setUnmatched(true)
					setPlace('Enter')
					setPIN(null)
				}
				setInput('')
			} else {
				setPIN(x)
				setPlace('Confirm')
				setInput('')
			}
		}
	}
	console.log(PIN)

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.back}
				onPress={() => navigation.navigate({ name: 'DaysPage' })}>
				<Icon name="chevron-left" color="#fff" size={40} />
			</TouchableOpacity>
			<Text style={styles.heading}>Create a PIN for your vault</Text>
			<TextInput
				style={styles.pinContainer}
				placeholder={place + ' PIN'}
				textAlign={'center'}
				value={input}
				maxLength={pinLength}
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
						enterPIN(val)
					}
				}}
			/>
			{unmatchedPIN && (
				<View>
					<Text style={styles.wrong}>PINs do not match, please try again.</Text>
				</View>
			)}
		</View>
	)
}
