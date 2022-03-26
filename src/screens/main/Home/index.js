import React, { useContext } from 'react';
import { useTheme } from '@react-navigation/native'
import { Text } from 'react-native'
import getStyles from './style'
import { Button } from 'native-base';
import { getText } from '~utils';
import { useQuery } from 'react-query';
import { ThemeContext } from '~providers';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    const { currentMode, changeMode } = useContext(ThemeContext)
    const { colors } = useTheme()
    const styles = getStyles(colors)
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json().then(response => {
                // console.log("**** ->  API response:    ", response)
            })
        )
    )
    if (isLoading) return <Text>{'Loading...'}</Text>
    if (error) return <Text>{'An error occurred'}</Text>
    return <SafeAreaView><Text style={styles.title}>
        {getText("home")}
    </Text>
        <Button onPress={() => navigation.navigate('Settings')}>Settings</Button>
        <Button onPress={() => changeMode(currentMode === 'dark' ? 'light' : 'dark')}>Change Mode</Button>
    </SafeAreaView>

}
export default HomeScreen