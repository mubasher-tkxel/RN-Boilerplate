import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native'
import { setData } from '../../../utils/storage';

const LoginScreen = ({ navigation }) => {
    useEffect(() => {
        setData('userData', {
            token: 'fff'
        })
    })
    return <SafeAreaView>
        <Text>LOGIN</Text>
    </SafeAreaView>
}
export default LoginScreen