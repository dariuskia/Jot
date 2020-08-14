import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'

export default function SettingsPage({ navigation, route }) {
	const [name, updateName] = useState()

	setName = (name) => {
		let user = auth().currentUser
		user.updateProfile({ displayName: name })
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Settings Page!</Text>
			<View>
				<TextInput
					placeholder="Enter a new name"
					onChangeText={(text) => updateName(text)}
				/>
				<Button
					title="Save"
					onPress={() => {
						if (name != null) setName(name)
						setTimeout(() => {
							route.params.onGoBack()
							navigation.goBack()
						}, 500)
					}}
				/>
			</View>
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
	},
})
