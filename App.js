import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'
import auth from '@react-native-firebase/auth'

import LandingPage from './src/components/Landing/LandingPage'
import HomePage from './src/components/Home/HomePage'
import JournalPage from './src/components/Journal/JournalPage'
import SettingsPage from './src/components/Settings/SettingsPage'
import Entries from './src/components/Entries/Entries'
import LoginPage from './src/components/Landing/Login/LoginPage'
import RegisterPage from './src/components/Landing/Register/RegisterPage'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from './src/utils/Colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeTabs({ navigation }) {
	useEffect(() => {
		auth().onAuthStateChanged(function (user) {
			if (!user) {
				navigation.reset({
					index: 0,
					routes: [{ name: 'Login' }],
				})
			}
		})
	})
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline'
					} else if (route.name === 'Journal') {
						iconName = focused ? 'pencil' : 'pencil-outline'
					} else if (route.name === 'Entries') {
						iconName = focused ? 'bookmark' : 'bookmark-outline'
					}

					return <Icon name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				activeTintColor: COLORS.themed.primary,
				inactiveTintColor: COLORS.inactiveGray,
				keyboardHidesTabBar: true,
				showLabel: false,
				style: {
					height: 65,
				},
			}}
			backBehavior="initialRoute">
			<Tab.Screen name="Home" component={HomePage} />
			<Tab.Screen name="Journal" component={JournalPage} />
			<Tab.Screen name="Entries" component={Entries} />
		</Tab.Navigator>
	)
}

export default function App() {
	const [firstOpen, setFirstOpen] = useState(false)
	const [loggedIn, setLoggedIn] = useState()

	useEffect(() => {
		auth().onAuthStateChanged(function (user) {
			if (user) {
				setLoggedIn(true)
			} else {
				setLoggedIn(false)
			}
		})
	})

	if (firstOpen) {
		return (
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="Landing" component={LandingPage} />
					<Stack.Screen
						name="Login"
						component={LoginPage}
						initialParams={{ displayArrow: true }}
					/>
					<Stack.Screen name="Register" component={RegisterPage} />
					<Stack.Screen name="Home" component={HomeTabs} />
					<Stack.Screen name="Settings" component={SettingsPage} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	} else {
		if (loggedIn) {
			return (
				<NavigationContainer>
					<Stack.Navigator headerMode="none">
						<Stack.Screen name="Home" component={HomeTabs} />
						<Stack.Screen name="Settings" component={SettingsPage} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		} else {
			return (
				<NavigationContainer>
					<Stack.Navigator headerMode="none">
						<Stack.Screen
							name="Login"
							component={LoginPage}
							initialParams={{ displayArrow: false }}
						/>
						<Stack.Screen name="Register" component={RegisterPage} />
						<Stack.Screen name="Home" component={HomeTabs} />
						<Stack.Screen name="Settings" component={SettingsPage} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		}
	}
}
