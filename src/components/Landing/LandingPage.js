import React from 'react'
import { View, Button, Text } from 'react-native'
import styles from './StylesLandingPage.js'

export default function LandingPage({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.headingContainer}>
				<Text style={styles.header}>Jot</Text>
				<Text style={styles.subheading}>
					The journaling companion designed for everybody.
				</Text>
			</View>
			<View style={styles.carouselContainer}></View>
			<View style={styles.loginContainer}>
				<Button
					onPress={() => navigation.navigate('Home')}
					title="Go to homepage (as default user)"
				/>
			</View>
		</View>
	)
}
