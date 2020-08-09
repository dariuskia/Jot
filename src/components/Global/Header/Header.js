import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import styles from './StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'

export default Header = ({ title, navigation, locked, back }) => {
	const toggleLock = function () {
		console.log('lock')
	}

	return (
		<View style={styles.container}>
			<BackButton navigation={navigation} display={back} />
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity onPress={toggleLock}>
				{locked != null ? (
					<Icon
						name={locked ? 'lock' : 'lock-open'}
						size={30}
						color={locked ? COLORS.themed.lighter : 'rgba(255, 255, 255, 0.8)'}
						style={styles.lock}
					/>
				) : (
					<View style={{ height: 30, width: 30 }} />
				)}
			</TouchableOpacity>
		</View>
	)
}

function BackButton({ pageName, navigation, display }) {
	if (!display) return <View style={{ width: 30, height: 30 }} />
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon
				name="chevron-left"
				size={30}
				color="white"
				style={styles.back('Journal')}
			/>
		</TouchableOpacity>
	)
}
