import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Avatar } from 'react-native-elements'

const HomeHeader = ({headline, subheadline, initials, onTapAvatar}) => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.headlineContainer}>
        <Text h3>{headline}</Text>
        <Text style={styles.subheadline}>{subheadline}</Text>
      </View>
      <Avatar 
        size={'medium'}
        rounded 
        title={initials}
        onPress={onTapAvatar} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headlineContainer: {
    flex: 0.8
  },
  subheadline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 8
  }
})


export default HomeHeader
