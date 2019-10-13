import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Input, ListItem } from "react-native-elements";
import Spacer from "../components/Spacer";

const mockSchools = [
  {
    id: "1",
    name: "Davis West Elementary",
    subtitle: "Dallas, TX"
  },
  {
    id: "2",
    name: "Waxahachie High School",
    subtitle: "Waxahachie, TX"
  },
  {
    id: "3",
    name: "Davis West Elementary",
    subtitle: "Dallas, TX"
  },
  {
    id: "4",
    name: "Red Oak Elem",
    subtitle: "Red Oak, TX"
  },
  {
    id: "5",
    name: "West Elementary",
    subtitle: "Houston, TX"
  },
  {
    id: "6",
    name: "Waxahachie High School",
    subtitle: "Waxahachie, TX"
  },
  {
    id: "7",
    name: "Davis West Elementary",
    subtitle: "Dallas, TX"
  },
  {
    id: "8",
    name: "Red Oak Elem",
    subtitle: "Red Oak, TX"
  },
  {
    id: "9",
    name: "West Elementary",
    subtitle: "Houston, TX"
  }
];

const SchoolSearch = () => {
  selectSchool = school => {
    console.log(school);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.selectSchool(item)}>
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        bottomDivider
        chevron
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Input
        placeholder={"Enter the name of your school"}
        returnKeyType={"search"}
      />
      <FlatList
        keyExtractor={school => school.id}
        data={mockSchools}
        renderItem={this.renderItem}
      />
    </View>
  );
};

SchoolSearch.navigationOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    elevation: 0
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SchoolSearch;
