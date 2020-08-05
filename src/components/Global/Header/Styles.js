import React from 'react'
import {StyleSheet} from 'react-native'

import {TIME} from '../../../utils/Time'

export default styles = ({ page }) => StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
		backgroundColor: '#272B58',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 15
	},
	title: {
		color: '#fff',
		fontSize: 24,
	},
	back: {
		display: (page == 'Journal') ? 'none' : 'flex'
	},
	lock: {
	},
})