import { StyleSheet } from 'react-native'
import COLORS from '../../utils/Colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 20,
		backgroundColor: COLORS.themed.primary,
		alignItems: 'center',
	},
	back: {
		width: '100%',
		marginTop: 20,
		marginLeft: -10,
	},
	heading: {
		color: 'white',
		fontFamily: 'Ubuntu Medium',
		fontSize: 26,
		textAlign: 'center',
		marginTop: 30,
		lineHeight: 40,
	},
	subheading: {
		padding: 10,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.75)',
		fontFamily: 'Ubuntu',
		textAlign: 'center',
		lineHeight: 25,
	},
	pinContainer: {
		fontSize: 28,
		color: 'rgba(255, 255, 255, 0.9)',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
		padding: 15,
		borderRadius: 5,
		marginTop: 50,
		width: '100%',
	},
	wrong: {
		padding: 10,
		marginTop: 20,
		fontSize: 16,
		color: 'rgba(0, 0, 0, 0.45)',
	},
})
