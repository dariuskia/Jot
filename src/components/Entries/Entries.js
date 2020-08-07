import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MonthsPage from './MonthsPage'
import DaysPage from './DaysPage'

const Stack = createStackNavigator()

export default function Entries() {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="MonthsPage" component={MonthsPage} />
        <Stack.Screen name="DaysPage" component={DaysPage} />
    </Stack.Navigator>
  )
}