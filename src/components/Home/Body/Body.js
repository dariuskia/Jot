import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Goals from './Goals';

const Body = () => {
	return (
		<SafeAreaView style={styles.body}>
			<Text style={styles.heading}>Goals</Text>
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
	heading: {
		fontSize: 25,
		color: '#4B5189',
		fontFamily: 'Ubuntu Medium',
	}
})

export default Body;