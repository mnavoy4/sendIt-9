import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapSearchBoxStyles from '../styles/MapSearchBoxStyles';
import { getPickUpLocation, getDropOffLocation, toggleSearchResult } from '../actions/mapActions';
import { useDispatch } from 'react-redux';


export default function MapAutoSearchBox(){
  const { width, height } = Dimensions.get('window');
  const autoCompleteHeight = height * 0.9;

  const dispatch = useDispatch();

  function handleGetPickUpLocation(coordDetails, otherInfo){
    getPickUpLocation(dispatch, {
      coordDetails,
      otherInfo,
    })
  }
  function handleGetDropOffLocation(coordDetails, otherInfo){
    getDropOffLocation(dispatch, {
      coordDetails,
      otherInfo,
    })
  }

  return (
    <View style={MapSearchBoxStyles.searchBox}>
      <GooglePlacesAutocomplete
        query={{
          key: "AIzaSyCUapq6jDSDYvPZGlFmubHd6UeEs_EPh3Y",
          language: "en",
        }}
        onPress={(data, details = null) => {
          handleGetPickUpLocation(details.geometry.location, {
            address: details.formatted_address,
            placeId: details.place_id
          });
        }}
        placeholder='Choose pick up location'
        enableHighAccuracyLocation={true}
        onFail={(error) => console.error(error)}
        fetchDetails={true}
        GoogleReverseGeocodingQuery
        listViewDisplayed="true"
        styles={{
          container: {
            position: 'absolute',
            justifyContent: 'center',
            marginTop: 6,
          },
          listView: {
            position: 'absolute',
            height: autoCompleteHeight,
            width: width,
            top: 150,
            backgroundColor: '#fff',
          },
          textInputContainer: {
            position: 'absolute',
            backgroundColor: "rgba(100,100,0,1)",
            opacity: 0.9,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginLeft: 10,
            top: 10,
            width: width * 0.95,
            alignItems: 'center',
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            width: width,
            height: 58,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />

      <GooglePlacesAutocomplete
        query={{
          key: "AIzaSyCUapq6jDSDYvPZGlFmubHd6UeEs_EPh3Y",
          language: "en",
        }}
        onPress={(data, details = null) => {
          handleGetDropOffLocation(details.geometry.location, {
            address: details.formatted_address,
            placeId: details.place_id
          });
        }}
        placeholder='Choose drop off location'
        enableHighAccuracyLocation={true}
        onFail={(error) => console.error(error)}
        fetchDetails={true}
        GoogleReverseGeocodingQuery
        listViewDisplayed="true"
        styles={{
          container: {
            position: 'absolute',
            justifyContent: 'center',
            marginTop: 4,
          },
          listView: {
            position: 'absolute',
            height: autoCompleteHeight,
            width: width,
            top: 150,
            backgroundColor: '#fff',
          },
          textInputContainer: {
            position: 'absolute',
            backgroundColor: "rgba(100,100,0,1)",
            opacity: 0.9,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            top: 80,
            width: width * 0.95,
            marginLeft: 10,
            alignItems: 'center',
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 58,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />
    </View>
  )
}
