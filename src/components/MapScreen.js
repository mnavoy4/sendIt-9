import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getCurrentLocation, getPickUpLocation } from '../actions/mapActions.js';
import { LinearGradient } from 'expo-linear-gradient';
import MapSearchBoxStyles from '../styles/MapSearchBoxStyles'
import mapSearchBoxStyles from '../styles/MapSearchBoxStyles';
// import store from '../store/store';
import MapAutoSearchBox from '../components/MapAutoSearchBox';
import MapViewDirections from 'react-native-maps-directions';


export default function MapScreen({navigation}) {

  const region = useSelector(state => state.region);
  const pickUpLocation = useSelector(state => state.pickUpLocation);
  const dropOffLocation = useSelector(state => state.dropOffLocation);
  let originLatitute = pickUpLocation.coordDetails ? pickUpLocation.coordDetails.lat : "";
  let originLongitude = pickUpLocation.coordDetails ? pickUpLocation.coordDetails.lng : "";
  let destinationLatitute = dropOffLocation.coordDetails ? dropOffLocation.coordDetails.lat : "";
  let destinationLongitude = dropOffLocation.coordDetails ? dropOffLocation.coordDetails.lng : "";
  let origin = {
    latitude: originLatitute,
    longitude: originLongitude
  };
  let destination = {
    latitude: destinationLatitute,
    longitude: destinationLongitude
  }

  let originForMap = {
    latitude: originLatitute,
    longitude: originLongitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  }
  let destinationForMap = {
    latitude: destinationLatitute,
    longitude: destinationLongitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  }

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentLocation(dispatch, LATITUDE_DELTA, LONGITUDE_DELTA)
  }, []); 

  return (
    <View styles={styles.container}>

      { originForMap.latitude && !destinationForMap.latitude ? (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={originForMap}
        >
          <MapView.Marker coordinate={originForMap} pinColor='#ce3624' />
        </MapView>
      ) : null }

      { originForMap.latitude && destinationForMap.latitude ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={destinationForMap}
        >
          <MapView.Marker coordinate={destinationForMap} pinColor='#ce3624' />
        </MapView>
      ) : null }
      <MapAutoSearchBox />
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonContainer}
        >
          <LinearGradient
            colors={['#352e5d', '#4d4678']}
            style={styles.buttonContainer}
          >
            <Text style={[styles.textSign, {color: '#fff'}]}>Back to ride details</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropOffSearchBox: {
    top: 60
  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  button: {
    position: 'absolute',
    width: '90%',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
    top: 700
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});