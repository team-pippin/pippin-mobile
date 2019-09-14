import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { ListItem, Icon, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const Account = ({navigation}) => {
  return (
    <ScrollView style={{
      marginHorizontal: 16,
      flex: 1
      }}>
      <ListItem 
        leftIcon={<Icon
          name={'envelope-o'} 
          type={'font-awesome'}
          />}
        title={'Email'}
        bottomDivider
        chevron
        />
      <ListItem 
        leftIcon={<Icon
          name={'list-ul'} 
          type={'font-awesome'}
          />}
        title={'My Schools'}
        bottomDivider
        chevron
        />
      <Spacer>
        <Button 
          title={'Sign Out'}
          type={'outline'}
          />
      </Spacer>
    </ScrollView>
  )
}

Account.navigationOptions = {
  title: 'Account'
}

const styles = StyleSheet.create({
})


export default Account
