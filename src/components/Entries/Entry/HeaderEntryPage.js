import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../Global/Header/StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'

export default Header = ({ title, navigation, locked }) => {
	return (
		<View style={styles.container}>
			<View>
				<BackButton navigation={navigation} />
			</View>

			<View>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View>
				<Lock locked={locked} />
			</View>
		</View>
	)
}

const BackButton = ({ navigation }) => {
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="chevron-left" size={30} color="white" />
		</TouchableOpacity>
	)
}
const Lock = ({ locked }) => {
	const toggleLock = () => {
		console.log('lock')
	}
	const iconName = locked ? 'lock' : 'lock-open'

	return (
		<TouchableOpacity onPress={() => toggleLock()}>
			<Icon
				name={iconName}
				size={30}
				color={locked ? COLORS.themed.lighter : 'rgba(255, 255, 255, 0.8)'}
				style={styles.lock}
			/>
		</TouchableOpacity>
	)
}
