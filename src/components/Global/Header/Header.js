import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text>Hello</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		top: 0,
		width: '100%',
		padding: 20,
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
 
export default Header;