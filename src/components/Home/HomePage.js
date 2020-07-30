import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Header from './Header/Header'
import Body from './Body/Body'
import NavBar from '../NavBar/NavBar'

export default function HomePage({ navigation }) {
  return (
      <View style={styles.container}>
      <StatusBar style="light" />
      
        <Header navigation={navigation} />
        <Body />

        <NavBar />
      </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272B58',
  },
});
