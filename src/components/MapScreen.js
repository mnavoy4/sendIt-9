import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getCurrentLocation } from '../actions/mapActions.js';
import MapSearchBoxStyles from '../styles/MapSearchBoxStyles'
import mapSearchBoxStyles from '../styles/MapSearchBoxStyles';
// import store from '../store/store';
import MapAutoSearchBox from '../components/MapAutoSearchBox';


export default function MapScreen() {

  const region = useSelector(state => state.region);

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;
  const denver = {
    latitude: 39.7392,
    longitude: -104.9903,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

  const autoCompleteHeight = height * 0.9

  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentLocation(dispatch, LATITUDE_DELTA, LONGITUDE_DELTA)
  }, []); 

  // console.log('FIND MEEEEEEE', store.getState().toggleSearchResult.resultType)

  return (
    <View styles={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={region}
      >
        <MapView.Marker coordinate={region} pinColor='#ce3624' />
      </MapView>
      <MapAutoSearchBox />
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});