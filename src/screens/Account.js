import React, { useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { ListItem, Icon, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const Account = ({ navigation }) => {
  const { state, signOut, clearErrors } = useContext(AuthContext);

  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      <ListItem
        leftIcon={<Icon name={"envelope-o"} type={"font-awesome"} />}
        title={"Email"}
        bottomDivider
        chevron
      />
      <ListItem
        leftIcon={<Icon name={"list-ul"} type={"font-awesome"} />}
        title={"My Schools"}
        bottomDivider
        chevron
      />
      <Spacer>
        <Button title={"Sign Out"} type={"outline"} onPress={signOut} />
      </Spacer>
    </ScrollView>
  );
};

Account.navigationOptions = {
  title: "Account"
};

const styles = StyleSheet.create({});

export default Account;
