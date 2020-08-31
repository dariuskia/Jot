import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../Global/Header/StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'

export default Header = ({ navigation, title }) => {
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
