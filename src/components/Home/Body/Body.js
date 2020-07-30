import React from 'react'
import styles from './Styles'
import { Text, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import Goals from './Goals/Goals'

export default function Body() {
	return (
		<SafeAreaView style={styles.body}>
			<Goals />
		</SafeAreaView>
	)
}
