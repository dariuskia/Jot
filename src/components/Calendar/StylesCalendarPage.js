import { StyleSheet } from 'react-native'

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
      backgroundColor: 'rgba(39, 43, 88, 0.05)',
      height: 55,
      margin: 10,
      borderRadius: 10,
      borderLeftWidth: 3,
      borderColor: 'red'
   },
   monthText: {
      color: '#272b58',
      fontFamily: 'Ubuntu Medium',
      fontSize: 18,
   },
})