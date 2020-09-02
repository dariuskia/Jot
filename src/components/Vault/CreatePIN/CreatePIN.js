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
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export default function CreatePIN({ navigation, route }) {
	const pinLength = 4

	const [input, setInput] = useState('')

	const [PIN, setPIN] = useState()

	const [place, setPlace] = useState('Enter')

	const [unmatchedPIN, setUnmatched] = useState(false)

	const uploadPin = async (val) => {
		let uuid = auth().currentUser.uid
		let ref = firestore().collection('users').doc(uuid)
		let doc = await ref.get()
		if (doc.exists) {
			await ref.update({ PIN: val })
		} else {
			await ref.set({
				entries: 0,
				messages: 0,
				avgSentiment: 0,
				goals: 0,
				PIN: val,
			})
		}
	}

	const enterPIN = (x) => {
		if (x.length == pinLength) {
			if (PIN != null) {
				// confirm pin
				if (x == PIN) {
					// success
					uploadPin(PIN)
					route.params.callback()
					navigation.goBack()
				} else {
					// confirm pin failed
					setUnmatched(true)
					setPlace('Enter')
					setPIN(null)
				}
				setInput('')
			} else {
				// enter pin
				setPIN(x)
				setPlace('Confirm')
				setInput('')
			}
		}
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
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
