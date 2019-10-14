import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../Spacer";

const HomeLinks = () => {
  return (
    <View>
      <Text style={styles.title}>Links</Text>
      <View style={{ height: 300, backgroundColor: "red" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "600",
    marginHorizontal: 16
  }
});

export default HomeLinks;
