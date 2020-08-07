import React, { useState } from 'react'
import { Text, View } from 'react-native'
//import styles from './Styles'
import { createStackNavigator } from '@react-navigation/stack';
//import Month from './Month/Month'
import Header from '../Global/Header/Header'
import firestore from '@react-native-firebase/firestore'


export default function DaysPage({ navigation }) {
	return(
		<View style={{ flex: 1 }}>
            <Header title="july 21" page="DaysPage" nav={navigation} />
			<View style={{ marginTop: 15 }}>
                <Text>Days page</Text>
			</View>
		</View>
	)

}