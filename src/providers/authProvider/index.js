import React, { createContext, useEffect, useReducer } from 'react';
import { getUserToken } from '~utils';
import SplashScreen from 'react-native-splash-screen';
import { RootStack } from '~navigation';
import { HomeScreen, LoginScreen, SettingsScreen, SignUpScreen } from '~screens';

export const AuthContext = createContext();
const AuthProvider = () => {
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
        <RootStack.Navigator screenOptions={{
            headerShown: false
        }}>{
                state?.isLogged ? <>
                    <RootStack.Screen component={HomeScreen} name="Home" />
                    <RootStack.Screen component={SettingsScreen} name="Settings" />
                </> :
                    <>
                        <RootStack.Screen component={LoginScreen} name="Login" />
                        <RootStack.Screen component={SignUpScreen} name="SignUp" />
                    </>
            }
        </RootStack.Navigator>
    </AuthContext.Provider>
}

export default AuthProvider