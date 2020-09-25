import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Dimensions, FlatList } from 'react-native';
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

const width = Dimensions.get('window').width;

export default function BrowseRidesScreen({navigation}){

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
        <Text style={styles.title}>
          Available Rides
        </Text>
        <FlatList
          data={Rides}
          style={styles.list}
          renderItem={({ item }) => (
            // <View style={styles.item}>
            //   <Text>Driver: {item.driver}</Text>
            //   <Text>Seats Available: {item.seatsAvailable}</Text>
            //   <Text>Price per Seat: ${item.pricePerSeat}</Text>
            // </View>
            <TouchableOpacity
              style={styles.item}
            >
              <LinearGradient
                colors={['#352e5d', '#ce3624']}
                style={styles.linearGradient}
                locations={[0.82, 1]}
              >
                <View>
                  <Text style={styles.text}>Driver: {item.driver}</Text>
                  <Text style={styles.text}>Seats Available: {item.seatsAvailable}</Text>
                  <Text style={styles.text}>Price per Seat: ${item.pricePerSeat}</Text>
                </View>
                <View>
                  <Text style={styles.text}>Pickup: {item.pickUpLocation.address}</Text>
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
    // marginRight: 10,
    // borderRadius: 10,
    marginTop: 10
  },
  text: {
    fontSize: 16,
    // color: '#ce3624',
    color: '#fff',
    fontWeight: 'bold'
  },
  linearGradient: {
    width: '98%',
    height: 95,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    padding: 5
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    color: '#352e5d'
  }
});