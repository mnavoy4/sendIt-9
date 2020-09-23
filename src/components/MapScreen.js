import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { getCurrentLocation } from '../actions/mapActions.js';
// import MapSearchBox from '../components/MapSearchBox';
// import MapSearchResults from '../components/MapSearchResults';
// import store from '../store/store'


export default function MapScreen() {

  // const region = useSelector(state => state.region);

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

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getCurrentLocation(dispatch, LATITUDE_DELTA, LONGITUDE_DELTA)
  // }, []); 

  // console.log('FIND MEEEEEEE', store.getState().toggleSearchResult.resultType)

  return (
    <View styles={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={denver}
      >
        <MapView.Marker coordinate={denver} pinColor='green' />
      </MapView>
      {/* <MapSearchBox /> */}
      {/* { (store.getState().toggleSearchResult.resultType.pickUp || store.getState().toggleSearchResult.resultType.dropOff) ? <MapSearchResults /> : null } */}
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});