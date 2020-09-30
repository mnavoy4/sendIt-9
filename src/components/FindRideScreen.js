import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector, connect } from 'react-redux';
import { listRides, getRideDetails } from '../actions/rideActions';
import { useIsFocused } from '@react-navigation/native';

const width = Dimensions.get('window').width;

function BrowseRidesScreen({navigation, route}){

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const ridesList = useSelector(state => state.rides.rides);

  useEffect(() => {
    listRides(dispatch);
  }, [isFocused]);

  const handleRideDetailsClick = (id) => {
    getRideDetails(dispatch, id);
    navigation.navigate('Ride Details');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#352e5d' barStyle='light-content' />
        <Text style={styles.title}>
          Available Rides
        </Text>
        <FlatList
          data={ridesList}
          extraData={ridesList}
          style={styles.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item._id}
              style={styles.item}
              onPress={() => handleRideDetailsClick(item._id)}
            >
              <LinearGradient

                colors={['#352e5d', '#96dce3']}
                style={styles.linearGradient}
                locations={[0.88, 1]}
              >
                <View>
                  <Text style={styles.text}>Driver: {item.driver}</Text>
                  <Text style={styles.text}>Seats Available: {item.seatsAvailable}</Text>
                  <Text style={styles.text}>Date: {item.date}</Text>
                </View>
                <View>
                  <Text style={styles.text}>Pickup: {item.pickUpLocation.address}</Text>
                  <Text style={styles.text}>Dropoff: {item.dropOffLocation.address}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
  </View>
  )
}
function mapStateToProps(state){
  return {
    rides: state.rides.rides
  }
}

export default connect(mapStateToProps, null)(BrowseRidesScreen)

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
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  linearGradient: {
    width: '98%',
    height: 120,
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