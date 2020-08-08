import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MonthsPage from './MonthsPage'
import DaysPage from './DaysPage'
import EntryPage from './Entry/EntryPage'

const Stack = createStackNavigator()

export default function Entries({ navigation }) {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen
				name="MonthsPage"
				component={MonthsPage}
				initialParams={{ tabNavigation: navigation }}
			/>
			<Stack.Screen name="DaysPage" component={DaysPage} />
			<Stack.Screen name="EntryPage" component={EntryPage} />
		</Stack.Navigator>
	)
}
