import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Goals = () => {
   let nextKey = 0;
   const [goals, setGoals] = useState(
      [
	]);

   const [placeholder, setPlaceholder] = useState('+ Add a goal');

   const removeGoal = (key) => {
      setGoals(prevGoals => (prevGoals.filter(goal => goal.key != key)));
   }

   return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior={'position'}>
		
         <View style={styles.container}>
            <View style={styles.titleContainer}>
               <Text style={styles.heading}>Goals</Text>
               <Text style={styles.numGoals}>{goals.length.toString() + " goals"}</Text>
            </View>
            <ScrollView>
               {goals.length != 0 && goals.map((goal) => (
                  <View style={styles.goalContainer}>
                     <Text editable="true" style={styles.text}>{goal.body}</Text>
                     <TouchableOpacity onPress={() => removeGoal(goal.key)}>
                        <Icon name="ios-close" size={30} color="#ff8989" />
                     </TouchableOpacity>
                  </View>
               ))}
            </ScrollView>
            <View>
               <TextInput
                  style={styles.input}
                  placeholder={placeholder}
                  onEndEditing={(val) => {
                    setGoals(prevGoals => (
                    	[...prevGoals, { body: val.nativeEvent.text, completed: false, key: nextKey++ }]
					))
				  }}
               />
            </View>
         </View>
         </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: -1,
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
   goalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   textContainer: {
   },
   text: {
      fontFamily: 'Rubik',
      fontSize: 18,
      color: '#8084A4',
      padding: 5,
   },
   input: {
      fontSize: 18,
      fontFamily: 'Rubik',
      color: '#8084A4'
   }
})

export default Goals;