import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from "./StylesActions"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Actions({ pressHandler, buttonTitle, description, buttonColor, iconName }) {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={pressHandler}>
				<View style={[styles.button, { backgroundColor: buttonColor }]} onPress={e => console.log('hi')} >
					<Text style={styles.buttonTitle}>{buttonTitle}</Text>
					<Text style={styles.buttonText}>{description}</Text>
					<Icon name={iconName} color="#0000000D" size={65} style={styles.icon} />
				</View>
			</TouchableOpacity>
		</View>
	)
}