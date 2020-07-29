import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import Header from './src/components/Home/Header/Header'
import Body from './src/components/Home/Body/Body'
import NavBar from './src/components/NavBar/NavBar'

export default function App() {
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
