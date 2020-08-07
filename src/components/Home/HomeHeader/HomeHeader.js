import React, { useState, useEffect } from 'react'
import styles from './StylesHomeHeader'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Actions from './Actions/Actions'

import { TIME } from '../../../utils/Time'

import AsyncStorage from '@react-native-community/async-storage'
import COLORS from '../../../utils/Colors'

export default function Header({ navigation }) {
	const [userName, setUsername] = useState(null)

	const runFirst = async () => {
		let user = await AsyncStorage.getItem('@username')
		setUsername(user)
	}

	runFirst()

	return (
		<View style={styles.header}>
			<View style={styles.headingContainer}>
				<View>
					<Text style={styles.greeting}>{(function () {
						switch (TIME) {
							case "MORNING": return "Good morning, "
							case "AFTERNOON": return "Good afternoon, "
							case "EVENING": return "Good evening, "
							case "NIGHT": return "Good night, "
							default: return "Hello, "
						}
					}())}</Text>
					<Text style={styles.name}>{userName}</Text>
				</View>
				<TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
					<Icon name="settings" size={30} color={COLORS.themed.home.settings} />
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<Actions pressHandler={() => navigation.navigate('Journal')} buttonTitle="Write" description="Write in today's entry" buttonColor="#25D1E7" iconName="pencil-outline" />
				<Actions pressHandler={() => navigation.navigate('Entries')} buttonTitle="Entries" description="View previous entries" buttonColor="#FCC573" iconName="notebook-outline" />
			</View>
			<View style={styles.circle}>

			</View>
		</View>
	)
}