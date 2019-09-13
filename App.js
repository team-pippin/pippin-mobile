import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuth from './src/screens/ResolveAuth';
import Home from './src/screens/Home';
import Landing from './src/screens/Landing';
import SchoolSearch from './src/screens/SchoolSearch';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';

const landingFlowNavigator = createStackNavigator({
  Landing, 
  SignIn,
  SignUp,
  SchoolSearch 
})

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  landingFlow: landingFlowNavigator,
  homeFlow: createBottomTabNavigator({
    Home
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <AuthProvider>
      <App ref={setNavigator} />
    </AuthProvider>
  );
} 