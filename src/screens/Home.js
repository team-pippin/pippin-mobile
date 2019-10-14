import React from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../components/Home/HomeHeader";
import Spacer from "../components/Spacer";
import HomeHeroCard from "../components/Home/HomeHeroCard";
import HomeFeatures from "../components/Home/HomeFeatures";
import HomeLinks from "../components/Home/HomeLinks";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          headline={"Dallas Middle School"}
          subheadline={"September 14".toUpperCase()}
          initials={"MD"}
          onTapAvatar={() => navigation.navigate("Account")}
        />
        <Spacer>
          <HomeHeroCard />
        </Spacer>
        <HomeFeatures />
        <HomeLinks />
      </ScrollView>
    </SafeAreaView>
  );
};

Home.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({});

export default Home;
