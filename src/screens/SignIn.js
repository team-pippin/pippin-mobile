import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";

const SignIn = ({ navigation }) => {
  const { state, signIn, clearErrors } = useContext(AuthContext);

  return (
    <View>
      <NavigationEvents onWillBlur={clearErrors} />
      <View style={styles.authContainer}>
        <AuthForm
          isLoading={false}
          buttonTitle={"Sign In"}
          errorMessage={state.errorMessage}
          onSubmit={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

SignIn.navigationOptions = {
  title: "Sign In"
};

const styles = StyleSheet.create({
  authContainer: {
    marginTop: 16
  }
});

export default SignIn;
