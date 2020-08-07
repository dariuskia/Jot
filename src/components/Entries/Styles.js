import { StyleSheet } from 'react-native'
import COLORS from '../../utils/Colors'

export default StyleSheet.create({
   container: {
      width: '100%',
      height: 80,
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
   },
   text: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
   },

   monthContainer: {
      backgroundColor: COLORS.backgroundGray,
      height: 55,
      margin: 10,
      borderRadius: 10,
      borderLeftWidth: 3,
      borderColor: 'red'
   },
   monthText: {
      color: 'black',
      fontFamily: 'Rubik Medium',
      fontSize: 18,
   },
})