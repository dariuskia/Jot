import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Global/Header/StylesHeader'

export default Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<View></View>
			<Text style={styles.title}>{title}</Text>
			<View></View>
		</View>
	)
}
