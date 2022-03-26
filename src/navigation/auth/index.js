import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignUpScreen} from '~screens';

const AuthStack = createNativeStackNavigator();
export const AuthNav = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen component={LoginScreen} name="Login" />
    <AuthStack.Screen component={SignUpScreen} name="SignUp" />
  </AuthStack.Navigator>
);
