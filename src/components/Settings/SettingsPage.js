import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'

export default function SettingsPage({ navigation, route }) {
	const [name, updateName] = useState()

	const setName = (name) => {
		let user = auth().currentUser
		user.updateProfile({ displayName: name })
	}

	function logout() {
		auth()
			.signOut()
			.catch(function (error) {
				console.log(error)
			})
	}

	function testNav() {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		})
	}

	useEffect(() => {
		auth().onAuthStateChanged(function (user) {
			if (!user) {
				// navigation.reset({})
			}
		})
	})

	useEffect(() => (console.disableYellowBox = true), [])

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}>Settings Page!</Text>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{ flexDirection: 'row' }}
						placeholder="Enter a new name"
						onChangeText={(text) => updateName(text)}
					/>
					<Button
						style={{ flexDirection: 'row' }}
						title="Save"
						onPress={() => {
							if (name != null) setName(name)
						}}
					/>
				</View>
			</View>
			<View>
				<Button
					title="Done"
					onPress={() => {
						route.params.onGoBack()
						navigation.goBack()
					}}
				/>
			</View>
			<View>
				<Button title="Logout" onPress={() => testNav()} />
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
