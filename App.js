import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Home/Header/Header'
import Body from './src/components/Home/Body/Body'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272B58',
  },
});
