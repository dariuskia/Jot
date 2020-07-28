import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Body = () => {
	return (
		<View style={styles.body}>
			<Text>Hello</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		width: '100%',
		backgroundColor: '#fff',
		height: '100%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: 35,
	}
})

export default Body;