import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import styles from '../../Global/Header/StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'

const Chat = ({ enabled, handler }) => {
	const iconName = enabled ? 'chat' : 'chat-outline'
	return (
		<TouchableOpacity
			onPress={() => {
				handler()
			}}>
			<Icon name={iconName} size={30} color="white" />
		</TouchableOpacity>
	)
}

const Lock = ({ locked }) => {
	const iconName = locked ? 'lock' : 'lock-open'
	return (
		<View>
			<TouchableOpacity>
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

export default Header = ({ title, replyEnabled, replyHandler }) => {
	return (
		<View style={styles.container}>
			<View>
				<Chat enabled={replyEnabled} handler={replyHandler} />
			</View>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View>
				<Lock />
			</View>
		</View>
	)
}
