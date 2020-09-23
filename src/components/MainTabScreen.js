import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import SettingsScreen from './SettingsScreen';
import CreateRideScreen from './CreateRideScreen';

const HomeStack = createStackNavigator();
const CreateRideStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen(){

  return (
    <Tab.Navigator
      initialRouteName="Find Ride"
      activeColor="#ce3624"
      style={{ backgroundColor: '#352e5d' }}
    >
      <Tab.Screen
        name="Find Ride"
        component={HomeStackScreen}
        options={{
          tabBarColor: '#352e5d',
          tabBarLabel: 'Find Ride',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post Ride"
        component={CreateRideStackScreen}
        options={{
          tabBarColor: '#352e5d',
          tabBarLabel: 'Post Ride',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="seat-recline-normal" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarColor: '#352e5d',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarColor: '#352e5d',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function HomeStackScreen({navigation}){
  return( 
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
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
    }} />
    </HomeStack.Navigator>
  )
}
function ProfileStackScreen({navigation}){
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{
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
      }} />
    </ProfileStack.Navigator>
  )
}
function CreateRideStackScreen({navigation}) {
  return(
    <CreateRideStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <CreateRideStack.Screen name="Details" component={CreateRideScreen} options={{
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
      }}
      />
  </CreateRideStack.Navigator>
  )
}
