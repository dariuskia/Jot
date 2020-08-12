import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#272B58',
	},
	headingContainer: {
		flex: 2,
		justifyContent: 'flex-end',
		backgroundColor: 'red',
		paddingHorizontal: 30,
	},
	header: {
		color: 'white',
		fontSize: 48,
		fontFamily: 'Ubuntu Medium',
	},
	subheading: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontFamily: 'Ubuntu',
		fontSize: 15,
		paddingBottom: 50,
	},
	carouselContainer: {
		flex: 3,
		backgroundColor: 'blue',
	},
	loginContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
