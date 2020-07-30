import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Actions from '../Actions/Actions'

export default function Header({ navigation }) {
	let userName = 'Herobrine'

	return (
		<View style={styles.header}>
			<View style={styles.headingContainer}>
				<View>
					<Text style={styles.greeting}>Good evening,</Text>
					<Text style={styles.name}>{userName}</Text>
				</View>
				<TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
					<Icon name="settings" size={30} color="#7C81B4" />
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<Actions pressHandler={() => navigation.navigate('Journal')} buttonTitle="Write" description="Write in today's entry" buttonColor="#25D1E7" iconName="pencil-outline" />
				<Actions pressHandler={() => navigation.navigate('Calendar')} buttonTitle="Calendar" description="View previous entries" buttonColor="#FCC573" iconName="calendar-outline" />
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 25,
		paddingTop: 60,
	},
	headingContainer: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	greeting: {
		color: '#add8e6',
		fontSize: 20,
		fontFamily: 'Rubik Medium',
	},
	name: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'Ubuntu Medium',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 20,
	}
})