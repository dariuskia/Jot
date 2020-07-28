import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Home/Header/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Test change</Text>
      <StatusBar style="light" />
      
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
