import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
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
import PersonalizePage from './src/components/Landing/Personalize/PersonalizePage'
import AnalyticsPage from './src/components/Analytics/AnalyticsPage'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from './src/utils/Colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeTabs({ navigation }) {
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
					} else if (route.name === 'Analytics') {
						iconName = focused ? 'chart-timeline-variant' : 'chart-line-variant'
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
			<Tab.Screen name="Analytics" component={AnalyticsPage} />
		</Tab.Navigator>
	)
}

export default function App() {
	const [firstOpen, setFirstOpen] = useState()
	const [loggedIn, setLoggedIn] = useState()
	const [displayName, setDisplayName] = useState()
	const [ran, setRan] = useState(false)

	const isFirstOpen = async () => {
		try {
			let recv = await AsyncStorage.getItem('@opened')
			return recv == null
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		auth().onAuthStateChanged(function (user) {
			if (user) {
				setLoggedIn(true)
				setDisplayName(auth().currentUser.displayName)
				AsyncStorage.setItem('@opened', 'true')
			} else {
				setLoggedIn(false)
				setDisplayName(null)
			}
		})
	})
	;(async function () {
		if (!ran) {
			try {
				let recv = await AsyncStorage.getItem('@opened')
				setFirstOpen(recv == null)
			} catch (error) {
				console.log(error)
			}
			setRan(true)
		}
	})()
	// useEffect(() => {
	// 	;(async function () {
	// 		setFirstOpen(isFirstOpen())
	// 	})()
	// }, [])

	if (loggedIn) {
		if (displayName == null) {
			return (
				<NavigationContainer>
					<Stack.Navigator headerMode="none">
						<Stack.Screen name="Personalize" component={PersonalizePage} />
						<Stack.Screen name="Home" component={HomeTabs} />
						<Stack.Screen name="Settings" component={SettingsPage} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		} else {
			return (
				<NavigationContainer>
					<Stack.Navigator headerMode="none">
						<Stack.Screen name="Home" component={HomeTabs} />
						<Stack.Screen name="Settings" component={SettingsPage} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		}
	} else {
		if (firstOpen === true) {
			return (
				<NavigationContainer>
					<Stack.Navigator headerMode="none">
						<Stack.Screen name="Landing" component={LandingPage} />
						<Stack.Screen
							name="Login"
							component={LoginPage}
							initialParams={{
								displayArrow: true,
							}}
						/>
						<Stack.Screen name="Register" component={RegisterPage} />
						<Stack.Screen name="Home" component={HomeTabs} />
						<Stack.Screen name="Settings" component={SettingsPage} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		} else if (firstOpen === false) {
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
		} else {
			// implement loading screen
			return <View></View>
		}
	}
}
