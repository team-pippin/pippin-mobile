import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../Spacer";
import HomeFeatureCell from "./HomeFeatureCell";

const mockFeature = [
  {
    title: "School Report",
    id: "0"
  },
  {
    title: "Bully Report",
    id: "1"
  },
  {
    title: "Contact",
    id: "2"
  }
];

const HomeFeatures = () => {
  selectFeature = feature => {
    console.log(feature);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.selectFeature(item)}>
      <HomeFeatureCell title={item.title} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.title}>Features</Text>
      <FlatList
        horizontal
        style={styles.list}
        keyExtractor={feature => feature.id}
        data={mockFeature}
        renderItem={this.renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "600",
    marginHorizontal: 16
  },
  list: {
    borderColor: "red",
    borderWidth: 1
  },
  view: {
    marginTop: 100,
    backgroundColor: "blue",
    width: 80,
    margin: 10,
    height: 200,
    borderRadius: 10
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: "red",
    width: 80,
    margin: 10,
    height: 200,
    borderRadius: 10
    //paddingHorizontal : 30
  }
});

export default HomeFeatures;
