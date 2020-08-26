import React from 'react'
import { View, Button, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../Styles.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CreatePIN({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.back}>
				<Icon name="chevron-left" />
			</View>
			<Text>Please enter PIN to continue</Text>
			<TextInput />
		</View>
	)
}
