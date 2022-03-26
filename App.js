import React from 'react';
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { AppDarkTheme, AppTheme } from './src/consts/theme';
import { NativeBaseProvider } from 'native-base';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider, AuthProvider } from './src/providers';
import { Provider } from 'react-redux';
import store from './src/redux/store'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NativeBaseProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider />
          </QueryClientProvider>
        </NativeBaseProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
