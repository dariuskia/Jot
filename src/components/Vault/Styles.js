import { StyleSheet } from 'react-native'
import COLORS from '../../utils/Colors'

export default StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
		backgroundColor: COLORS.backgroundGray,
		flex: 1,
		justifyContent: 'center',
	},
	back: {
		width: '100%',
		height: 30,
		flex: 1,
	},
	text: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
	},
})
