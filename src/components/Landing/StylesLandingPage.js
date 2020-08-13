import { StyleSheet } from 'react-native'
import COLORS from '../../utils/Colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#272B58',
	},
	headingContainer: {
		flex: 2,
		justifyContent: 'center',
		paddingHorizontal: 50,
	},
	header: {
		color: 'white',
		fontSize: 35,
		fontFamily: 'Ubuntu Medium',
	},
	subheading: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontFamily: 'Ubuntu',
		marginTop: 10,
		fontSize: 17,
		lineHeight: 25,
	},
	carouselContainer: {
		flex: 4,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginHorizontal: 30,
	},
	carouselText: {
		fontFamily: 'Ubuntu Medium',
		fontSize: 25,
		textAlign: 'center',
		color: '#fff',
		marginTop: 30,
		lineHeight: 40,
	},
	contContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	contButton: {
		marginBottom: 40,
		marginRight: 40,
		borderRadius: 5,
		paddingHorizontal: 25,
		paddingVertical: 15,
		backgroundColor: '#4B5189',
	},
	contText: {
		fontSize: 15,
		fontFamily: 'Ubuntu',
		color: 'white',
	},
	square: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
})
