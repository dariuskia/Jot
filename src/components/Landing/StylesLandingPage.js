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
		paddingHorizontal: 30,
	},
	header: {
		color: 'white',
		fontSize: 35,
		fontFamily: 'Ubuntu Medium',
	},
	subheading: {
		color: 'rgba(255, 255, 255, 0.65)',
		fontFamily: 'Ubuntu',
		marginTop: 10,
		fontSize: 18,
	},
	carouselContainer: {
		flex: 4,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginHorizontal: 30,
	},
	carouselText: {
		fontFamily: 'Ubuntu Medium',
		fontSize: 20,
		textAlign: 'center',
		color: '#fff',
		marginTop: 30,
		lineHeight: 30,
	},
	loginContainer: {
		flex: 2,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 30,
		paddingBottom: 30,
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
		fontFamily: 'Ubuntu Medium',
		fontSize: 15,
	},
})
