import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header/Header'
import Body from './Body/Body'
import NavBar from '../Navbar/Navbar'

export default function HomePage() {
  return (
      <View style={styles.container}>
      <StatusBar style="light" />
      
        <Header />

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
