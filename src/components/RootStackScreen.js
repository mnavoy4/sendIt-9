import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import CreateProfileScreen from './CreateProfileScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name='SignInScreen' component={SignInScreen} />
      <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
      <RootStack.Screen name='CreateProfileScreen' component={CreateProfileScreen} />
    </RootStack.Navigator>
  )

}

export default RootStackScreen;