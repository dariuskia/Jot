import { StyleSheet } from 'react-native'
import COLORS from '../../utils/Colors'

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		marginVertical: 15,
	},
	body: {
		flex: 1,
		padding: 30,
	},
	heading: {
		color: COLORS.themed.primary,
		fontFamily: 'Ubuntu Medium',
		fontSize: 25,
	},
})
