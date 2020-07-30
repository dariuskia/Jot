import {StyleSheet} from 'react-native'

export default StyleSheet.create({
	header: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 25,
		paddingTop: 60,
	},
	headingContainer: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	greeting: {
		color: '#add8e6',
		fontSize: 20,
		fontFamily: 'Rubik Medium',
	},
	name: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'Ubuntu Medium',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 20,
	}
})