import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import SettingsScreen from './SettingsScreen';
import CreateRideScreen from './CreateRideScreen';
import FindRideScreen from './FindRideScreen';

const FindRideStack = createStackNavigator();
const CreateRideStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
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
        component={FindRideStackScreen}
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
        component={SettingsStackScreen}
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

function FindRideStackScreen({navigation}){
  return( 
    <FindRideStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <FindRideStack.Screen name="Home" component={FindRideScreen} options={{
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
    </FindRideStack.Navigator>
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
function SettingsStackScreen({navigation}){
  return (
    <SettingsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <SettingsStack.Screen name='Settings' component={SettingsScreen} options={{
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
    </SettingsStack.Navigator>
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
      <CreateRideStack.Screen name="SendIt!" component={CreateRideScreen} options={{
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
