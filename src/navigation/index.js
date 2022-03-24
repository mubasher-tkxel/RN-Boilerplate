import React, { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SettingsScreen, LoginScreen, SignUpScreen } from '~screens';
import { getData } from '~utils';

const Stack = createNativeStackNavigator()
export const AuthContext = createContext();
const RootNav = () => {
    const [userData, setUserData] = useState()
    useEffect(()  => {
        setUserData(getData('userData'))
    }, [])
    const authContext = useMemo(() => ({
        userData
    }))
    return <AuthContext.Provider value={authContext}>
        <Stack.Navigator>{
        userData ? <>
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

