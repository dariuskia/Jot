import { StyleSheet } from 'react-native'
import COLORS from '../../../../utils/Colors'

export default StyleSheet.create({
	container: {
		flex: -1,
		paddingBottom: 25,
	},
	heading: {
		fontSize: 25,
		color: COLORS.themed.primary,
		fontFamily: 'Ubuntu Medium',
	},
	numGoals: {
		fontSize: 15,
		fontFamily: 'Rubik',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		paddingBottom: 15,
	},
	goalContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	text: {
		fontFamily: 'Rubik',
		fontSize: 18,
		color: COLORS.textGray,
		padding: 5,
	},
	input: {
		fontSize: 18,
		fontFamily: 'Rubik',
		color: COLORS.textGray,
	}
})