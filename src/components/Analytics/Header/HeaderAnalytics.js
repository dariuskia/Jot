import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import styles from '../../Global/Header/StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'
import { createStackNavigator } from '@react-navigation/stack'

export default Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<View></View>

			<View>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View></View>
		</View>
	)
}
