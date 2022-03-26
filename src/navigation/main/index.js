import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SettingsScreen} from '~screens';

const MainStack = createNativeStackNavigator();
export const MainNav = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen component={HomeScreen} name="Home" />
    <MainStack.Screen component={SettingsScreen} name="Settings" />
  </MainStack.Navigator>
);
