import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Dimensions, StatusBar, FlatList, ListView } from 'react-native';
import { List, ListItem, Left, Body, Right } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Rides } from '../data';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { listRides, getRideDetails } from '../actions/rideActions';
import { useIsFocused } from '@react-navigation/native';

const width = Dimensions.get('window').width;

export default function BrowseRidesScreen({navigation}){

  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(true)

  useEffect(() => {
    listRides(dispatch);
    return () => {
      //
    }
  }, []);

  const ridesList = useSelector(state => state.rides.rides);
  const handleRideDetailsClick = (id) => {
    getRideDetails(dispatch, id);
    navigation.navigate('Ride Details');
  }
  console.log('FIND MEEEEEE', ridesList)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
      {/* <ScrollView style={styles.scrollView}> */}
        <Text style={styles.title} onPress={() => console.log('RIDES LISTTTTTT', ridesList)}>
          Available Rides
        </Text>
        <FlatList
          data={ridesList}
          legacyImplementation={true}
          // extraData={isFocused}
          style={styles.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item._id}
              style={styles.item}
              onPress={() => handleRideDetailsClick(item._id)}
              // onPress={() => console.log(item._id)}
            >
              <LinearGradient

                colors={['#352e5d', '#96dce3']}
                style={styles.linearGradient}
                locations={[0.88, 1]}
              >
                <View>
                  <Text style={styles.text}>Driver: {item.driver}</Text>
                  <Text style={styles.text}>Seats Available: {item.seatsAvailable}</Text>
                  <Text style={styles.text}>Price per Seat: ${item.pricePerSeat}</Text>
                </View>
                <View>
                  <Text style={styles.text}>Pickup: {item.pickUpLocation.address}</Text>
                  <Text style={styles.text}>Dropoff: {item.dropOffLocation.address}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />

      {/* </ScrollView> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  list: {
    width: width
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
    width: width
  },
  item: {
    marginLeft: 10,
    marginTop: 12
    // padding: 5
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  linearGradient: {
    width: '98%',
    height: 120,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    padding: 12
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    color: '#352e5d'
  }
});