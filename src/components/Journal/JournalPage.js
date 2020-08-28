import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Journal from './Journal'
import Unlock from '../Vault/Unlock/Unlock'
import CreatePIN from '../Vault/CreatePIN/CreatePIN'

const Stack = createStackNavigator()

export default function JournalPage() {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Journal" component={Journal} />
			<Stack.Screen name="CreatePIN" component={CreatePIN} />
			<Stack.Screen name="Unlock" component={Unlock} />
		</Stack.Navigator>
	)
}
