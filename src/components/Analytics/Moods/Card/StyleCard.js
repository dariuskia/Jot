import { StyleSheet } from 'react-native'

export const styles = (mood) => {
	let bgColor, textColor
	switch (mood) {
		case 1:
			bgColor = 'rgba(231, 37, 84, 0.1)'
			textColor = '#E72554'
			break
		case 2:
			bgColor = 'rgba(255, 172, 12, 0.1)'
			textColor = '#FFAC0C'
			break
		case 3:
			bgColor = 'rgba(37, 209, 231, 0.1)'
			textColor = '#2CB8CA'
			break
		case 4:
			bgColor = 'rgba(59, 238, 174, 0.12)'
			textColor = '#36DA8B'
			break
		case 5:
			bgColor = 'rgba(27, 223, 23, 0.25)'
			textColor = '#2A9662'
			break
		default:
			bgColor = 'rgba(168, 168, 168, 0.1)'
			textColor = '#898989'
	}
	return StyleSheet.create({
		container: {
			flex: 1,
			margin: 10,
			// padding: 20,
			width: 80,
			height: 100,
			justifyContent: 'flex-end',
			alignItems: 'center',
			backgroundColor: bgColor,
			borderRadius: 10,
		},
		text: {
			color: textColor,
			fontFamily: 'Ubuntu Medium',
			marginVertical: 20,
			fontSize: 20,
		},
	})
}
