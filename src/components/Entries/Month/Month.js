import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './StylesMonth'

// This can probably just be a general list item component that we pass a prop into to determine if it's a month or day

export default function Month({ month, year }) {
   // TODO: make the colors a circular progression (rainbow or gradient)
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