import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import Goals from './Goals';

const Body = () => {
	return (
		<SafeAreaView style={styles.body}>
			<Goals />
		</SafeAreaView>
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
	},
})

export default Body;