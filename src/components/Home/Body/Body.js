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
		backgroundColor: '#fff',
		width: '100%',
		flex: 1,
	}
})

export default Body;