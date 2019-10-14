import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

const HomeFeatureCell = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/home/pencils.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>{title}</Text>
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    margin: 12
  }
});

export default HomeFeatureCell;
