import {StyleSheet} from 'react-native'
import { TIME } from '../../../utils/Time'

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
		color: (TIME == "NIGHT") ? '#add8e6' : 'rgba(255, 255, 255, 0.5)',
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
	},
	circle: {
		borderRadius: 999,
		borderColor: (TIME == "NIGHT") ? '#22264d' : 'rgba(0, 0, 0, 0.03)',
		borderWidth: 40,
		height: 200,
		width: 200,
		position: 'absolute',
		top: -50,
		right: -50,
		zIndex: -99,
	}
})