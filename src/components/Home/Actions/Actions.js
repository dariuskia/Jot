import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Actions({buttonTitle, description, buttonColor, iconName}) {
	return (
		<View style={styles.buttonContainer}>
			<View style={[styles.button, {backgroundColor: buttonColor}]} onPress={e => console.log('hi')} >
				<Text style={styles.buttonTitle}>{buttonTitle}</Text>
				<Text style={styles.buttonText}>{description}</Text>
				<Icon name={iconName} color="#0000000D" size={65} style={styles.icon} />
			</View>
		</View>
	);
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
		position: "relative",
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
		color: '#fff',
		fontFamily: 'Rubik Medium',
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Rubik',
	},
	icon: {
		position: "absolute",
		bottom: 0,
		right: 0,
	}
});