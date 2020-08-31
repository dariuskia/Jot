import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../Global/Header/StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'
import { LongPressGestureHandler } from 'react-native-gesture-handler'

export default Header = ({ title, locked, backHandler, lockHandler }) => {
	return (
		<View style={styles.container}>
			<View>
				<BackButton handler={backHandler} />
			</View>

			<View>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View>
				<Lock handler={lockHandler} locked={locked} />
			</View>
		</View>
	)
}

const BackButton = ({ handler }) => {
	return (
		<TouchableOpacity onPress={() => handler()}>
			<Icon name="chevron-left" size={30} color="white" />
		</TouchableOpacity>
	)
}
const Lock = ({ locked, handler }) => {
	const iconName = locked ? 'lock' : 'lock-open'
	return (
		<View>
			<TouchableOpacity onPress={() => handler()}>
				<Icon
					name={iconName}
					size={30}
					color={locked ? COLORS.themed.lighter : 'rgba(255, 255, 255, 0.8)'}
					style={styles.lock}
				/>
			</TouchableOpacity>
		</View>
	)
}
