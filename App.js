import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuth from "./src/screens/ResolveAuth";
import Home from "./src/screens/Home";
import Landing from "./src/screens/Landing";
import SchoolSearch from "./src/screens/SchoolSearch";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import Account from "./src/screens/Account";

const landingFlowNavigator = createStackNavigator({
  Landing,
  SignIn,
  SignUp,
  SchoolSearch
});

const homeStackNavigator = createStackNavigator(
  {
    Home,
    Account
  },
  { mode: "modal" }
);

homeStackNavigator.navigationOptions = ({ navigation }) => {
  if (navigation.state.index !== 0) {
    return {
      tabBarVisible: false
    };
  }
  return {
    tabBarVisible: true
  };
};

const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth,
    landingFlow: landingFlowNavigator,
    mainFlow: createBottomTabNavigator({
      homeRoot: homeStackNavigator
    })
  },
  {
    initialRouteName: "mainFlow"
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={setNavigator} />
    </AuthProvider>
  );
};
