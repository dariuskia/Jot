import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Actions = ({buttonTitle, description, buttonColor}) => {
	return (
			<View style={styles.buttonContainer}>
				<View style={[styles.button, {backgroundColor: buttonColor}]} onPress={testEvent => console.log('hi')} >
					<Text style={styles.buttonTitle}>{buttonTitle}</Text>
					<Text style={styles.buttonText}>{description}</Text>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginHorizontal: 10,
		marginTop: 20,
	},
    button: {
		padding: 15,
		height: 100,
		borderRadius: 15,
    },
    buttonTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        
    },
    buttonText: {
        fontSize: 10,
        color:"white",
        
    }
})

export default Actions;