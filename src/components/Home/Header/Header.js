import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Actions from '../Actions/Actions'

const Header = () => {
	return (
		<View style={styles.header}>
			<View style={styles.headingContainer}>
				<View>
					<Text style={styles.greeting}>Good evening</Text>
					<Text style={styles.name}>John</Text>
				</View>
				<View>
					<Text style={{color: 'white'}}>Settings</Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<Actions buttonTitle="Write" description="Write in today's entry" buttonColor="#25D1E7" />
				<Actions buttonTitle="Calendar" description="View previous entries" buttonColor="#FCC573" />
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	header: {
		width: '100%',
		paddingHorizontal: 25,
		paddingVertical: 50,
	},
	headingContainer: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	greeting: {	
		color: '#add8e6',
		fontSize: 20,
	},
	name: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 20,
	}
})
 
export default Header;