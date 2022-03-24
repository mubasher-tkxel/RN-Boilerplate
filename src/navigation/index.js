import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SettingsScreen } from '../screens';

const MainStack = createNativeStackNavigator()
const MainStackNav = () => <MainStack.Navigator>
    <MainStack.Screen component={HomeScreen} name="Home" />
    <MainStack.Screen component={SettingsScreen} name="Settings" />
</MainStack.Navigator>

export default MainStackNav

