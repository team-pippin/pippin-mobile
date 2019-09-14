import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Image } from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import Spacer from '../components/Spacer'

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <HomeHeader 
        headline={'Dallas Middle School'}
        subheadline={'September 14th, 2019'}
        initials={'MD'}
        onTapAvatar={() => navigation.navigate('Account')}
        />

      <ScrollView
        showsVerticalScrollIndicator={false}
        >

        <Spacer>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image 
                source={require('../../assets/school.jpg')}
                style={styles.image}
                />
            </View>
            
            <View style={styles.cardTitleContainer}>
              <Text h4>Welcome to Pippin.</Text>
              <Text>Tap Here for info</Text>
            </View>
          </View>
        </Spacer>

        <View  style={{height: 300, margin: 20, backgroundColor:'blue'}}/>
        <View  style={{height: 300, margin: 20, backgroundColor:'red'}}/>
        <View  style={{height: 300, margin: 20, backgroundColor:'green'}}/>

      </ScrollView>
    </SafeAreaView>
  )
}

Home.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3
  },
  cardTitleContainer: {
    margin: 16,
  },
  imageContainer: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.3, 
  }
})

export default Home
