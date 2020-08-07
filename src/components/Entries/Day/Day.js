import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { styles } from './StylesDay'

export default function Day({ day, month }) {

   return (
       <View style={styles().container}>
            <View>
                <Text style={styles().text}>{month.monthName} {day.dayNum}</Text>
            </View>
       </View>
   )
}