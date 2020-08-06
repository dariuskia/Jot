import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
})