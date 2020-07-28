import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Actions = ({buttonTitle, description, buttonColor}) => {
	return (
		<View style={styles.buttonContainer}>
			<View style={[styles.button, {backgroundColor: buttonColor}]} onPress={e => console.log('hi')} >
				<Text style={styles.buttonTitle}>{buttonTitle}</Text>
				<Text style={styles.buttonText}>{description}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
	},
    button: {
		padding: 15,
		height: 120,
		borderRadius: 10,
		marginHorizontal: 10,
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonText: {
        fontSize: 10,
        color: '#fff',
        
    }
})

export default Actions;