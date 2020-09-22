import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ExploreScreen from './ExploreScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen(){
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ce3624"
      style={{ backgroundColor: '#352e5d' }}
    >
      <Tab.Screen
        name="Home"
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
        name="Notifications"
        component={DetailsStackScreen}
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
        component={ProfileScreen}
        options={{
          tabBarColor: '#352e5d',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarColor: '#352e5d',
          tabBarLabel: 'Sign Out',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
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
function DetailsStackScreen({navigation}) {
  return(
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#352e5d'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight:'bold' }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
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
  </DetailsStack.Navigator>
  )
}
