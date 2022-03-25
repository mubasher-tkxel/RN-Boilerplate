import React from 'react';
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { AppDarkTheme, AppTheme } from './src/consts/theme';
import { NativeBaseProvider } from 'native-base';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider, AuthProvider} from './src/providers';

const queryClient = new QueryClient()
 
const App = () => {
  return (
    <ThemeProvider>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider/>
        </QueryClientProvider>
      </NativeBaseProvider>
    </ThemeProvider>
  );
};

export default App;
