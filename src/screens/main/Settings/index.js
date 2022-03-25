import { Button } from 'native-base';
import React from 'react';
import { Text, SafeAreaView } from 'react-native'

const SettingsScreen = ({navigation}) => {
    return <SafeAreaView>
        <Text>
            Settings
        </Text>

        <Button onPress={() => navigation.navigate('Home')}>Home</Button>
    </SafeAreaView>
}
export default SettingsScreen