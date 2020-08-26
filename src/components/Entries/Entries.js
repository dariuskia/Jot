import React from 'react'
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack'

import MonthsPage from './MonthsPage'
import DaysPage from './DaysPage'
import EntryPage from './Entry/EntryPage'
import Unlock from '../Vault/Unlock/Unlock'
import CreatePIN from '../Vault/CreatePIN/CreatePIN'

const Stack = createStackNavigator()

export default function Entries({ navigation }) {
	return (
		<Stack.Navigator
			headerMode="none"
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}>
			<Stack.Screen
				name="MonthsPage"
				component={MonthsPage}
				initialParams={{ tabNavigation: navigation }}
			/>
			<Stack.Screen name="DaysPage" component={DaysPage} />
			<Stack.Screen name="EntryPage" component={EntryPage} />
			<Stack.Screen name="Unlock" component={Unlock} />
			<Stack.Screen name="CreatePIN" component={CreatePIN} />
		</Stack.Navigator>
	)
}
