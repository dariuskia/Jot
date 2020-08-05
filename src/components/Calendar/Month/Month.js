import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { styles } from './Styles'

export default function Month({ navigation, month, year }) {

   let colors = {
      January: '#8b0000',
      February: 'purple',
      March: '#add8e6',
      April: 'white',
      May: 'green',
      June: '#b19cd9',
      July: 'red',
      August: '#90EE90',
      September: '#00008B',
      October: 'pink',
      November: 'yellow',
      December: 'blue',
   }

   return (
      <View style={styles(colors[month]).container}>
         <View>
            <Text style={styles().text}>{month} {year}</Text>
         </View>

      </View >
   )
}