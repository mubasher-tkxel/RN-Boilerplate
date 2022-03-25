import React, { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SettingsScreen, LoginScreen, SignUpScreen } from '~screens';
import { getUserToken } from '~utils';
import SplashScreen from 'react-native-splash-screen';
import { setData } from '../utils';

const Stack = createNativeStackNavigator()
export const AuthContext = createContext();
const RootNav = () => {
    const initialState = {
        isLoading: true,
        isLogged: false,
        userToken: null
    }
    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case 'SIGN_IN':
                return {
                    ...prevState, isLoading: false,
                    isLogged: true, userToken: action.payload
                }
            case 'SIGN_OUT':
                return {
                    ...prevState, isLoading: false,
                    isLogged: false, userToken: null
                }
            case 'CONTINUE_SESSION':
                return {
                    ...prevState, isLoading: false,
                    isLogged: true, userToken: null
                }
            default:
                break;
        }
    }, initialState)
    useEffect(() => {
        const handleNav = () => {
            SplashScreen.hide()
            const userToken = getUserToken()
            console.log(userToken);
            if (userToken) {
                dispatch({ type: 'CONTINUE_SESSION', payload: getUserToken() })
            }
            else {
                dispatch({ type: 'SIGN_OUT', payload: getUserToken() })
            }
        }
        handleNav()
    }, [])
    return <AuthContext.Provider value={state}>
        <Stack.Navigator>{
            state?.isLogged ? <>
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={SettingsScreen} name="Settings" />
            </> :
                <>
                    <Stack.Screen component={LoginScreen} name="Login" />
                    <Stack.Screen component={SignUpScreen} name="SignUp" />
                </>
        }
        </Stack.Navigator>
    </AuthContext.Provider>
}
export default RootNav

