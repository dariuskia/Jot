import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

import HomeHeader from './HomeHeader/HomeHeader'
import Body from './Body/Body'

import { TIME } from '../../utils/Time'

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HomeHeader navigation={navigation} />
      <Body />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (TIME == "NIGHT") ? '#272B58' : '#5391EF',
  },
})
