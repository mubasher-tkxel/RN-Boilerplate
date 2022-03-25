import { DefaultTheme } from "@react-navigation/native"

export const AppTheme = {
    dark: false,
    ...DefaultTheme,
    colors: {
        primary: 'green',
        secondary: 'red',
        background: 'white'
    }
}
export const AppDarkTheme = {
    dark: true,
    ...DefaultTheme,
    colors: {
        primary: 'yellow',
        secondary: 'white',
        background: 'black',
    }
}