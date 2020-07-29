import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Checkbox = ({ onCheck }) => {
	const [checked, toggleCheckbox] = useState(false)

	const pressHandler = () => {
		toggleCheckbox(prevState => !prevState);
		onCheck();
	}

	return (
		<View>
			<TouchableOpacity onPress = {pressHandler}>
				{checked ? (
					<Icon 
					name={'ios-checkbox-outline'} 
					size={20} 
					color='#8084A4' />
				) : (
					<Icon 
					name={'ios-square-outline'} 
					size={25} 
					color='#8084A4' />
				)}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
})

export default Checkbox
