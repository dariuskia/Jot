import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './src/components/Home/HomePage'
import JournalPage from './src/components/Journal/JournalPage'
import CalendarPage from './src/components/Calendar/CalendarPage'
import SettingsPage from './src/components/Settings/SettingsPage'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline' // outline icons instead?
          } else if (route.name === 'Journal') {
            iconName = focused ? 'pencil' : 'pencil-outline'
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline'
          }

          return <Icon name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#102456',
        inactiveTintColor: '#C3C8D4',
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          height: 65,
        }
      }}
      backBehavior="initialRoute"
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Journal" component={JournalPage} />
      <Tab.Screen name="Calendar" component={CalendarPage} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Settings" component={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}