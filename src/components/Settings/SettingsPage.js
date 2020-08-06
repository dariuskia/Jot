import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

export default function SettingsPage() {
   const [name, updateName] = useState()
   const setName = async (name) => {
      try {
         await AsyncStorage.setItem('@username', name)
      } catch (error) {
         console.log(error)
         throw new Error(error)
      }
   }
   return (
      <View style={styles.container}>
         <Text style={styles.text}>
            Settings Page!
			</Text>
         <View>
            <TextInput placeholder="Enter a new name" onChangeText={(text) => updateName(text)} />
            <Button title='Change name' onPress={() => { if (name != null) setName(name) }} />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      fontSize: 20,
   }
})