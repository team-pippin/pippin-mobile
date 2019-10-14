import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";

const HomeHeroCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/school.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.cardTitleContainer}>
        <Text style={styles.title}>Welcome to Pippin.</Text>
        <Text>Tap Here for info adsfa sda sdfadfadsfadsfadfasdf asdf</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3
  },
  cardTitleContainer: {
    margin: 16
  },
  imageContainer: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.3
  },
  title: {
    fontSize: 26,
    fontWeight: "600"
  }
});

export default HomeHeroCard;
