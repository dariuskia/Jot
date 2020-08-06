import { StyleSheet } from 'react-native'
import { TIME } from '../../../../utils/Time'

export default StyleSheet.create({
	container: {
		flex: -1,
		paddingBottom: 25,
	},
	heading: {
		fontSize: 25,
		// color: '#4B5189',
		color: (TIME === "NIGHT") ? '#272B58' : '#5391EF',
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
		color: '#8084A4',
		padding: 5,
	},
	input: {
		fontSize: 18,
		fontFamily: 'Rubik',
		color: '#8084A4'
	}
})