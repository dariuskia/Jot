import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './src/components/Home/HomePage'
import JournalPage from './src/components/Journal/JournalPage'
import CalendarPage from './src/components/Calendar/CalendarPage'
import SettingsPage from './src/components/Settings/SettingsPage'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home'; // outline icons instead?
            } else if (route.name === 'Journal') {
              iconName = focused ? 'ios-book' : 'ios-book';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#102456',
          inactiveTintColor: '#C3C8D4',
          keyboardHidesTabBar: true,
        }}
        backBehavior="initialRoute"
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Journal" component={JournalPage} />
        <Tab.Screen name="Calendar" component={CalendarPage} />
        {/* <Tab.Screen name="Settings" component={SettingsPage} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}