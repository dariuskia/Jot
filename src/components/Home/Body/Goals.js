import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, Text } from 'react-native';

const Goals = () => {
   const [goals, setGoals] = useState(
      [
         { body: 'go outside', completed: false, key: 0 },
         { body: 'see friends', completed: true, key: 1 },
      ]);
   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.heading}>Goals</Text>
            <Text style={styles.numGoals}>{goals.length.toString() + " goals"}</Text>
         </View>
         <ScrollView>
            {goals.map((goal) => (
               <Text style={styles.text}>{goal.body}</Text>
            ))}

         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   heading: {
      fontSize: 25,
      color: '#4B5189',
      fontFamily: 'Ubuntu Medium',
   },
   numGoals: {
      fontSize: 15,
      fontFamily: 'Rubik',
   },
   titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 15,
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