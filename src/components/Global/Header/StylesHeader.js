import { StyleSheet } from 'react-native'

import COLORS from '../../../utils/Colors'

export default StyleSheet.create({
	container: {
		height: 90,
		backgroundColor: COLORS.themed.primary,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingTop: 15,
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontFamily: 'Ubuntu Medium',
	},
})
