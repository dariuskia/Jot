import React from 'react'
import { StyleSheet } from 'react-native'

import { TIME } from '../../../utils/Time'
import COLORS from '../../../utils/Colors'

export default styles = ({ page }) => StyleSheet.create({
	container: {
		height: 90,
		width: '100%',
		backgroundColor: COLORS.themed.primary,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 15
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontFamily: 'Ubuntu Medium',
	},
	back: {
		display: (page == 'Journal') ? 'none' : 'flex'
	},
	lock: {
	},
})