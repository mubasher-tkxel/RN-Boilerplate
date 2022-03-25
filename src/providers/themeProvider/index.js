import React, { createContext, useEffect, useState } from 'react';
import { AppDarkTheme, AppTheme } from '~consts';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';

export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState()
    const scheme = useColorScheme()
    useEffect(() => {
        setMode(scheme)
    }, [scheme])
    const changeMode = (newMode) => setMode(newMode)
    return <ThemeContext.Provider value={{
        changeMode,
        currentMode: mode
    }}>
        <NavigationContainer theme={mode === 'dark' ? AppDarkTheme : AppTheme} >
            {children}
        </NavigationContainer>
    </ThemeContext.Provider>
}

export default ThemeProvider