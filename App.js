import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/components/MainTabScreen';
import { DrawerContent } from './src/components/DrawerContent';
import SupportScreen from './src/components/SupportScreen';
import SettingsScreen from './src/components/SettingsScreen';
import RootStackScreen from './src/components/RootStackScreen';
import { AuthContext } from './src/components/context';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
const MapStack = createStackNavigator();

export default function App() {

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    email: null
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          email: action.email
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          email: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          email: action.email,
          isLoading: false
        };
    }
  }
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const email = foundUser.email
        try {
          await AsyncStorage.setItem('userToken', userToken)
        } catch(error) {
          console.log(error)
        }
      dispatch({ type: 'LOGIN', email: email, token: userToken})
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(error) {
        console.log(error)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: (email, password) => {
      console.log('signUp was called', email, password)
    }
  }), [])

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken', userToken)
      } catch(error) {
        console.log(error)
      }
      dispatch({ type: 'REGISTER', token: userToken})
    }, 1000)
  }, [])
  if(loginState.isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* <MapStack.Navigator name='Map' component={MapScreen} /> */}
        
        { 
          loginState.userToken != null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            </Drawer.Navigator>
        )
        :
          <RootStackScreen />
        }

      </NavigationContainer>
    </AuthContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
