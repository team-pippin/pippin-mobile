import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const Landing = () => {
  return (
    <SafeAreaView style={{flex: 1}} >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Spacer>
            <Text style={{textAlign: 'center'}} h3>Pippin</Text>
          </Spacer>
          <View style={styles.shadow}>
            <Image 
              source={require('../../assets/school.jpg')}
              style={styles.image}
              />
          </View>
          <Spacer>
            <Text style={styles.headerBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Text>
          </Spacer>
        </View>
        <View style={styles.buttonContainer}>
          <Spacer>
            <Button title={'Log In'} />
          </Spacer>
          <Spacer>
            <Button title={'Sign Up'} />
          </Spacer>
        </View>
      </View>
    </SafeAreaView>
  )
}

Landing.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContainer: {
    marginTop: 150,
    flex: 5,
    justifyContent: 'space-between',
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 8,
    alignSelf: 'center'
  },
  shadow: {
    shadowOffset: { width: 0, height: 12 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    backgroundColor: '#0000',
    shadowRadius: 12
  },
  headerBody: {
    fontSize: 18,
    lineHeight: 32,
    color: 'grey'
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-end'
  }
})

export default Landing
