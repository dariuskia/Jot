import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = () => {
   const focusedColor = '#102456';
   const unfocusedColor = '#C3C8D4';

   return (
      <View style={styles.container}>
         <Icon name="md-home" size={30} color={focusedColor} />
         <Icon name="md-bookmark" size={30} color={unfocusedColor} />
         <Icon name="md-calendar" size={30} color={unfocusedColor} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 12,
      borderTopWidth: 2,
      borderTopColor: '#C3C8D4'
   }
})

export default NavBar;