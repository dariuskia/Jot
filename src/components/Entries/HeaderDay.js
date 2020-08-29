import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../Global/Header/StylesHeader'

export default Header = ({ title, navigation }) => {
	return (
		<View style={styles.container}>
			<View>
				<BackButton navigation={navigation} />
			</View>
			<Text style={styles.title}>{title}</Text>
			<View style={{ height: 30, width: 30 }}></View>
		</View>
	)
}

function BackButton({ navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="chevron-left" size={30} color="white" />
		</TouchableOpacity>
	)
}
