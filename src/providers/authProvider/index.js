import React, { createContext, useEffect, useReducer } from 'react';
import { getUserToken } from '~utils';
import SplashScreen from 'react-native-splash-screen';
import { RootStack } from '~navigation';
import { HomeScreen, LoginScreen, SettingsScreen, SignUpScreen } from '~screens';
import { AuthNav, MainNav } from '~navigation';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '~redux/actions';

export const AuthContext = createContext();
const AuthProvider = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  useEffect(() => {
    const handleNav = () => {
      SplashScreen.hide();
      const userToken = getUserToken();
      if (userToken) {
        dispatch(authActions.continueSession(userToken));
      } else {
        dispatch(authActions.signOut());
      }
    };
    handleNav();
  }, []);

  console.log(state)
  return (
    <AuthContext.Provider value={state}>
      {state?.isLogged ? <MainNav /> : <AuthNav />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
