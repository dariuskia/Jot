import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		marginBottom: 35,
	},
	item: {
		height: 80,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	top: {
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	bottom: {
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	col: {
		marginLeft: 20,
	},
	subheading: {
		color: 'white',
		fontSize: 13,
		fontFamily: 'Ubuntu',
	},
	value: {
		color: 'white',
		fontSize: 35,
		fontFamily: 'Ubuntu Medium',
	},
})
