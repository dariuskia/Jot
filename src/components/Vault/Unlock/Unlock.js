import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import style from '../Styles'
import { styles } from '../../Entries/Month/StylesMonth'

export default function Unlock({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Unlock Page</Text>
			<Button title="click me" onPress={() => navigation.goBack()} />
		</View>
	)
}
