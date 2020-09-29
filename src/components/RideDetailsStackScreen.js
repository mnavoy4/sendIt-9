import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons'
import RideDetailsScreen from './RideDetailsScreen';


const RideDetailsStack = createStackNavigator();

const RideDetailsStackScreen = ({navigation}) => {

  return (
    <RideDetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <RideDetailsStack.Screen name='Ride Details' component={RideDetailsScreen} options={{
      title: 'SendIt!',
      headerLeft: () => (
        <FontAwesome.Button
          name='bars'
          color='#fff'
          backgroundColor='#352e5d'
          size={25}
          onPress={() => {
            navigation.openDrawer()
          }}
          >
          </FontAwesome.Button>
      )
    }}/>
    </RideDetailsStack.Navigator>
  )
}

export default RideDetailsStackScreen