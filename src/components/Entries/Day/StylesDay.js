import { StyleSheet } from 'react-native'
import COLORS from '../../../utils/Colors'

export const styles = () =>
	StyleSheet.create({
		container: {
			backgroundColor: COLORS.backgroundGray,
			flexDirection: 'row',
			height: 55,
			margin: 10,
			borderRadius: 10,
			// borderColor: COLORS.themed.primary,
			// borderWidth: 1,
			paddingHorizontal: 20,
			marginHorizontal: 20,
			textAlign: 'left',
			//flex: 1,
			alignItems: 'center',
			//display: 'flex',
		},
		text: {
			color: COLORS.themed.text,
			fontFamily: 'Ubuntu',
			fontSize: 19,
			textAlign: 'left',
			paddingLeft: 15,
		},
		dayIcon: {
			backgroundColor: COLORS.themed.secondary,
			borderRadius: 9999,
			width: 32,
			height: 32,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		iconText: {
			textAlign: 'center',
			color: 'white',
			fontSize: 16,
		},
		dateAndLock: {
			flexDirection: 'row',
			flex: 1,
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	})
