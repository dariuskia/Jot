import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Checkbox from './Checkbox'

const Goals = () => {
   const [goals, setGoals] = useState(
      [
      ]);

   const removeGoal = (key) => {
      setGoals(prevGoals => (prevGoals.filter(goal => goal.key != key)));
      console.log(goals)
   }

   const input = React.createRef();
   const [nextKey, setNextKey] = useState(0);

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={'position'}>
         <View style={styles.container}>
            <View>
               <View style={styles.titleContainer}>
                  <Text style={styles.heading}>Goals</Text>
                  <Text style={styles.numGoals}>{goals.length.toString() + " goals"}</Text>
               </View>
            </View>
            <ScrollView>
               <View>
                  {goals.length != 0 && goals.map((goal) => {
                     let textStyles = [styles.text];
                     if (goal.completed) textStyles.push({textDecorationLine: 'line-through'});
                     return (
                     <View style={styles.goalContainer}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                           <Checkbox key={goal.key} />
                           <Text 
                              key={goal.key} 
                              style={textStyles}>
                              {goal.body}
                           </Text>
                        </View>
                        <TouchableOpacity onPress={() => removeGoal(goal.key)}>
                           <Icon name="ios-close" size={30} color="#ff8989" />
                        </TouchableOpacity>
                     </View>
                  )})}
               </View>
               <View>
                  <TextInput
                     style={styles.input}
                     placeholder='+ Add a goal'
                     ref={input}
                     onEndEditing={(val) => {
                        let txt = val.nativeEvent.text
                        if (txt.length > 0) {
                           setGoals(prevGoals => (
                              [...prevGoals, { body: txt, completed: false, key: nextKey }]
                           ));
                           input.current.clear();
                           setNextKey((prevKey) => (prevKey + 1));
                        }
                     }}
                  />
               </View>
            </ScrollView>
         </View>
      </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: -1,
      paddingBottom: 25,
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