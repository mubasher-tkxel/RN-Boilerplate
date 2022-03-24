import React from 'react';
import { useTheme } from '@react-navigation/native'
import { Text } from 'react-native'
import getStyles from './style'
import { Button } from 'native-base';
import { getText } from '../../../utils';
import { useQuery } from 'react-query';

const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme()
    const styles = getStyles(colors)
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json().then(response => console.log(response))
        )
    )
    if (isLoading) return <Text>{'Loading...'}</Text>
    if (error) return <Text>{'An error occurred'}</Text>
    return <><Text style={styles.title}>
        {getText("home")}
    </Text>
        <Button onPress={() => navigation.navigate('Settings')}>Settings</Button>
    </>

}
export default HomeScreen