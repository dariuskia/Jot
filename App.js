import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './src/components/Home/HomePage'
import JournalPage from './src/components/Journal/JournalPage'
import CalendarPage from './src/components/Calendar/CalendarPage'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Journal" component={JournalPage} />
        <Tab.Screen name="Calendar" component={CalendarPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}