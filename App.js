import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuth from './src/screens/ResolveAuth';
import Home from './src/screens/Home';
import Landing from './src/screens/Landing';

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  landingFlow: createStackNavigator({
    Landing
  }),
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