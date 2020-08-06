import { StyleSheet } from 'react-native'

export const styles = (color = null) => StyleSheet.create({
   container: {
      backgroundColor: 'rgba(39, 43, 88, 0.05)',
      height: 55,
      margin: 10,
      borderRadius: 10,
      borderLeftWidth: 4,
      borderColor: color,
      paddingHorizontal: 20,
      textAlign: 'left',
      justifyContent: 'center',
   },
   text: {
      color: '#272b58',
      fontFamily: 'Rubik Medium',
      fontSize: 18,
   },
})