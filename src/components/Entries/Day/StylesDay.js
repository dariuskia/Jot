import { StyleSheet } from 'react-native'
import COLORS from '../../../utils/Colors'

export const styles = (color = null) => StyleSheet.create({
   container: {
      backgroundColor: COLORS.backgroundGray,
      height: 55,
      margin: 10,
      borderRadius: 10,
      borderLeftWidth: 4,
      borderColor: color,
      // borderColor: COLORS.themed.primary,
      // borderWidth: 1,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      textAlign: 'left',
      justifyContent: 'center',
   },
   text: {
      color: COLORS.themed.text,
      fontFamily: 'Ubuntu',
      fontSize: 19,
   },
})