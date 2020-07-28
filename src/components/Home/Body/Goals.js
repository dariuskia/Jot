import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, SafeAreaView, Text } from 'react-native';

const Goals = () => {
   const [goals, setGoals] = useState(
      [
         { body: 'go outside', completed: false, key: 0 },
         { body: 'see friends', completed: true, key: 1 },
         { body: 'see friends', completed: true, key: 2 },
         { body: 'see friends', completed: true, key: 3 },
         { body: 'see friends', completed: true, key: 4 },
         { body: 'see friends', completed: true, key: 5 },
         { body: 'see friends', completed: true, key: 6 },
         { body: 'see friends', completed: true, key: 7 },
         { body: 'see friends', completed: true, key: 8 },
         { body: 'see friends', completed: true, key: 9 },
         { body: 'see friends', completed: true, key: 10 },
         { body: 'see friends', completed: true, key: 11 },
         { body: 'see friends', completed: true, key: 12 },
         { body: 'see friends', completed: true, key: 13 },
         { body: 'see friends', completed: true, key: 14 },
         { body: 'see friends', completed: true, key: 15 },
         { body: 'see friends', completed: true, key: 16 },
         { body: 'hello', completed: true, key: 17 },
      ]);
   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            {goals.map((goal) => (
               <Text style={styles.text}>{goal.body}</Text>
            ))}
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 15,
   },
   textContainer: {
   },
   text: {
      fontFamily: 'Rubik',
      fontSize: 18,
      color: '#8084A4',
      padding: 5,
   },
})

export default Goals;