import { StyleSheet } from 'react-native'
import COLORS from '../../../utils/Colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#272B58',
		padding: 40,
	},
	header: {
		marginTop: 70,
	},
	heading: {
		color: 'white',
		fontSize: 30,
		fontFamily: 'Ubuntu Medium',
	},
	inputContainer: {
		marginTop: 10,
	},
	input: {
		marginTop: 30,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.9)',
	},
	buttonContainer: {
		marginVertical: 20,
	},
	loginButton: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		width: '100%',
		marginVertical: 10,
		paddingVertical: 25,
	},
	loginText: {
		color: 'white',
		fontFamily: 'Ubuntu',
		fontSize: 15,
	},
})
