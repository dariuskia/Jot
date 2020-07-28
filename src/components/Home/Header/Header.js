import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Actions from '../Actions/Actions.js'

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.greeting}>Good evening</Text>
			<Text style={styles.name}>John</Text>
			<View style={styles.buttonContainer}>
		
				<Actions buttonTitle="Write" description="Write in today's entry" buttonColor="#25D1E7" />
				<Actions buttonTitle="Calendar" description="View previous entries" buttonColor="#FCC573" />
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		top: 0,
		width: '100%',
		paddingHorizontal: 25,
		paddingVertical: 50,
		flex: 1,
		backgroundColor: '#272B58',
	},
	greeting: {	
		color: '#add8e6',
		fontSize: 20
	},
	name: {
		color: '#ffffff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	buttonContainer: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'red'
	}
})
 
export default Header;