import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default function CalendarPage() {
	(async () => {
		try {
			const msgRef = await firestore().collection('messages').doc('testMsg')
			const doc = await msgRef.get()
			if (!doc.exists) {
				console.log("no doc found")
			} else {
				console.log(doc.data())
			}
		} catch (error) {
			console.log(error)
		}
	})()
	console.log('dfdf')
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Calendar Page!
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
	}
})