import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/Spacer";

const SignUp = ({ navigation }) => {
  const { state, signUp, clearErrors } = useContext(AuthContext);

  return (
    <View>
      <NavigationEvents onWillBlur={clearErrors} />
      <Spacer>
        <Text style={styles.subtitle}>
          To get started, create your account.
        </Text>
      </Spacer>
      <View style={styles.authContainer}>
        <AuthForm
          isLoading={false}
          buttonTitle={"Sign Up"}
          errorMessage={state.errorMessage}
          onSubmit={() => navigation.navigate("SchoolSearch")}
        />
      </View>
    </View>
  );
};

SignUp.navigationOptions = {
  title: "Sign Up"
};

const styles = StyleSheet.create({
  authContainer: {
    marginTop: 16
  },
  subtitle: {
    fontSize: 18,
    color: "gray"
  }
});

export default SignUp;
