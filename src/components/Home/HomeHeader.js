import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar } from "react-native-elements";

const HomeHeader = ({ headline, subheadline, initials, onTapAvatar }) => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.headlineContainer}>
        <Text style={styles.subheadline}>{subheadline}</Text>
        <Text style={styles.headline}>{headline}</Text>
      </View>
      <Avatar size={"medium"} rounded title={initials} onPress={onTapAvatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  headlineContainer: {
    flex: 0.9
  },
  headline: {
    fontSize: 32,
    fontWeight: "800"
  },
  subheadline: {
    fontSize: 14,
    fontWeight: "800",
    color: "gray",
    marginTop: 8
  }
});

export default HomeHeader;
