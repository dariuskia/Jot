import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Goals = () => {
   let nextKey = 0;
   const [goals, setGoals] = useState(
      [
          {body: "go outside", key: 0.2342341},
          {body: "go outside", key: 0.234234234},
          {body: "go outside", key: 0.2334235},
          {body: "go outside", key: 0.6132},
          {body: "go outside", key: 0.83452},
          {body: "go outside", key: 0.276745},
          {body: "go outside", key: 0.453467},
          {body: "go outside", key: 0.23412},
          {body: "go outside", key: 0.613136},
          {body: "go outside", key: 0.2342341},
	]);

   const [placeholder, setPlaceholder] = useState('+ Add a goal');

   const removeGoal = (key) => {
      setGoals(prevGoals => (prevGoals.filter(goal => goal.key != key)));
   }
   const [textValue, setValue] = useState(null);

   const onSubmit = () => {
	   setValue(null)
   }

   return (
    <KeyboardAvoidingView
    style={{flex: 1}}
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
                  {goals.length != 0 && goals.map((goal) => (
                     <View style={styles.goalContainer}>
                        <Text editable="true" style={styles.text}>{goal.body}</Text>
                        <TouchableOpacity onPress={() => removeGoal(goal.key)}>
                           <Icon name="ios-close" size={30} color="#ff8989" />
                        </TouchableOpacity>
                     </View>
                  ))}
               </View>
               <View>
                  <TextInput
                     style={styles.input}
                     placeholder={placeholder}
               value={textValue}
                     onEndEditing={(val) => {
                     let txt = val.nativeEvent.text
                     if (txt.length > 0) {
                        setGoals(prevGoals => (
                           [...prevGoals, { body: txt, completed: false, key: Math.random() }]
                        ))
                     }
                  onSubmit();
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