import React from 'react';
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNav from './src/navigation';
import { AppDarkTheme, AppTheme } from './src/consts/theme';
import { NativeBaseProvider } from 'native-base';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

const App = () => {
  const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? AppDarkTheme : AppTheme} >
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <MainStackNav />
        </QueryClientProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;