import React, { useState, useEffect } from 'react'
import styles from './Styles'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Actions from '../Actions/Actions'

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
					<Text style={styles.greeting}>{(function () { if (TIME == "DAY") return "Good morning,"; if (TIME == "AFTERNOON") return "Good afternoon,"; if (TIME == "NIGHT") return "Good evening," }())}</Text>
					<Text style={styles.name}>{userName}</Text>
				</View>
				<TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
					<Icon name="settings" size={30} color={/*(TIME == "NIGHT") ? "#7C81B4" : "#2D66BC"*/ COLORS.themed.secondary} />
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<Actions pressHandler={() => navigation.navigate('Journal')} buttonTitle="Write" description="Write in today's entry" buttonColor="#25D1E7" iconName="pencil-outline" />
				<Actions pressHandler={() => navigation.navigate('Calendar')} buttonTitle="Calendar" description="View previous entries" buttonColor="#FCC573" iconName="calendar-outline" />
			</View>
			<View style={styles.circle}>

			</View>
		</View>
	)
}