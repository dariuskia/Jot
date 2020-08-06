import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './StylesHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default Header = ({ title, page, locked }) => {
	const toggleLock = function () {
		console.log("hello there")
	}
	return (
		<View style={styles.container}>
			<BackButton pageName={page} />

			<Text style={styles.title}>{title}</Text>

			<TouchableOpacity onPress={toggleLock}>
				{page === 'Journal' ? (<Icon name={locked ? "lock" : "lock-open"} size={30} color={locked ? "#2D66BC" : "#FFFFFF40"} style={styles.lock} />) : <View style={{ height: 30, width: 30 }} />}
			</TouchableOpacity>
		</View>
	)
}

function BackButton(props) {
	if (props.pageName === "Journal") return <View style={{ width: 30, height: 30 }} />
	return (
		<TouchableOpacity>
			<Icon name="chevron-left" size={30} color="white" style={styles.back("Journal")} />
		</TouchableOpacity>
	)
}