import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

const RideDetailsScreen = ({navigation}) => {
  const rideDetails = useSelector(state => state.rideDetails);
  const [signedInUser, setSignedInUser] = useState('');
  const [weatherData, setWeatherData] = useState({})
  // if(rideDetails.dropOffLocation){
  //   const { latitude, longitude } = rideDetails.dropOffLocation.coordinates;
  //   console.log('FIND MEEEE', latitude, longitude);
  //   axios.get(`https://api.climacell.co/v3/weather/realtime?lat=${latitude}&lon=${longitude}&unit_system=us&fields=temp%2Cfeels_like%2Cwind_speed%2Cprecipitation%2Cprecipitation_type&apikey=Iao24Gam7wsDj4qwbAECchOLztk4j5nQ`)
  //     .then(response => setWeatherData(response.data))
  //   console.log(weatherData)
  // }

  useEffect(()=> {
    AsyncStorage.getItem('name')
      .then(user => setSignedInUser(user))
  }, []);

  const handleBookRideClick = () => {
    navigation.navigate('Find Ride');
  };

  if(!rideDetails.pickUpLocation){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          Ride Details
        </Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Pick up location: </Text> {rideDetails.pickUpLocation.address}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Drop off location: </Text> {rideDetails.dropOffLocation.address}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Driver: </Text>{rideDetails.driver}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Date:  </Text>{rideDetails.date}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Departure time:  </Text>{rideDetails.departureTime}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Seats Available:  </Text>{rideDetails.seatsAvailable}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Price per seat:  </Text>${rideDetails.pricePerSeat}</Text>
          </View>
          {/* <View style={styles.detail}>
            <Text style={styles.detailText}>Weather at destination: API Weather call</Text>
          </View> */}
        </View>
        
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleBookRideClick()}
          >
            <LinearGradient
              colors={['#352e5d', '#4d4678']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {color: '#fff'}]}>Book A Ride With {rideDetails.driver.split(' ')[0]}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.backButton}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.goBack()}
          >
            <LinearGradient
              colors={['#352e5d', '#4d4678']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {color: '#fff'}]}>Back to Available Rides</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RideDetailsScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  detailsContainer: {
    marginHorizontal: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  signIn: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  detail: {
    marginTop: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  detailText: {
    fontSize: 20,
    marginTop: 10
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
    width: width
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    color: '#352e5d'
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  backButton: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});