import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import styles from './StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../utils/Colors'
import {useRoute} from '@react-navigation/native';

export default Header = ({ title, page, nav, locked }) => {
	const toggleLock = function () {
		console.log('lock')
	}
	const route = useRoute();

	return (
		<View style={styles.container}>
			{/* {route.name != "MonthsPage" && (<BackButton pageName={page} navigation={nav} />)} */}
			<BackButton pageName={page} navigation={nav} />
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity onPress={toggleLock}>
				{page === 'Journal' ? (<Icon name={locked ? "lock" : "lock-open"} size={30} color={locked ? COLORS.themed.lighter : 'rgba(255, 255, 255, 0.8)'} style={styles.lock} />) : <View style={{ height: 30, width: 30 }} />}
			</TouchableOpacity>
		</View>
	)
}

function BackButton({ pageName, navigation }) {
	if (pageName === "Journal" || pageName === "MonthsPage") return <View style={{ width: 30, height: 30 }} />
	return (
		<TouchableOpacity onPress={() => navigation.goBack()} >
			<Icon name="chevron-left" size={30} color="white" style={styles.back("Journal")} />
		</TouchableOpacity>
	)
}