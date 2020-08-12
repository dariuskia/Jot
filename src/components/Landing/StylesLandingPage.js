import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#272B58',
	},
	headingContainer: {
		flex: 2,
		justifyContent: 'flex-end',
		backgroundColor: 'red',
		paddingHorizontal: 30,
	},
	header: {
		color: 'white',
		fontSize: 48,
		fontFamily: 'Ubuntu Medium',
	},
	subheading: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontFamily: 'Ubuntu',
		fontSize: 15,
		paddingBottom: 50,
	},
	carouselContainer: {
		flex: 3,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	loginContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
