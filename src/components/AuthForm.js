import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ buttonTitle, onSubmit, errorMessage, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Input
          autoCapitalize={"none"}
          label={"Email"}
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize={"none"}
          secureTextEntry
          value={password}
          label={"Password"}
          onChangeText={setPassword}
        />
      </Spacer>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          loading={isLoading}
          onPress={() => {
            onSubmit({ email, password });
          }}
          title={buttonTitle}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 16,
    alignSelf: "center"
  }
});

export default AuthForm;
