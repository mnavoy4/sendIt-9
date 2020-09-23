import React from 'react';
import RNGooglePlaces from 'react-native-google-places';
import store from '../store/store'
import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_ADDRESS_INPUT,
  TOGGLE_SEARCH_RESULT,
  GET_ADDRESS_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  GET_DISTANCE_MATRIX
} from '../constants/mapConstants';
import request from '../util/request'

const getCurrentLocation = (dispatch, latitudeDelta, longitudeDelta) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({ 
          type: GET_CURRENT_LOCATION_SUCCESS,
          payload: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta,
            longitudeDelta
          }})
      },
      (error) => console.log(error.message), {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };

const getSearchResults = (dispatch, payload) => {
  dispatch({
    type: GET_ADDRESS_INPUT,
    payload
  })
}

const toggleSearchResult = (dispatch, payload) => {
  dispatch({
    type: TOGGLE_SEARCH_RESULT,
    payload
  })
}

const getAddressPredictions = (dispatch) => {
  console.log('FIND MEEEE', store.getState());
  // let userInput = store.getState().searchResults.inputData.value
  // RNGooglePlaces.getAutocompletePredictions(userInput, { country: 'US' })
  //   .then((results) => {
  //     dispatch({
  //       type: GET_ADDRESS_PREDICTIONS,  
  //       payload: results
  //     })
  //   })
  //   .catch((error) => console.log(error.message))
}

const getSelectedAddress = (dispatch, placeId, makeFalsePayload) => {
  console.log('Find MEEEEEE');
  let selectedTypeOfRide = store.getState().toggleSearchResult.resultType.pickUp ? 'selectedPickUp' : 'selectedDropOff'
  return (
    RNGooglePlaces.lookUpPlaceByID(placeId)
      .then((results) => {
        dispatch({
          type: GET_SELECTED_ADDRESS,
          payload: {
            [selectedTypeOfRide]: {
              results
            }
          }
        })
      })
      .then(() => {
        dispatch({
          type: SET_PICKUP_AND_DROPOFF_TO_FALSE,
          makeFalsePayload
        })
      })
      .then(() => {
        if(store.getState().selectedAddress.selectedAddress.selectedDropOff
          && store.getState().selectedAddress.selectedAddress.selectedPickUp){
            request.get('https://maps.googleapis.com/maps/api/distancematrix/json')
            .query({
              origins: store.getState().selectedAddress.selectedAddress.selectedPickUp.latitude + "," + store.getState().selectedAddress.selectedAddress.selectedPickUp.longitude,
              destinations: store.getState().selectedAddress.selectedAddress.selectedDropOff.latitude + "," + store.getState().selectedAddress.selectedAddress.selectedDropOff.longitude,
              mode: 'driving',
              key: 'AIzaSyCUapq6jDSDYvPZGlFmubHd6UeEs_EPh3Y'
            })
            .finish((error, response) => {
              dispatch({
                type: 'GET_DISTANCE_MATRIX',
                payload: response.body
              })
            })
          }
      })
      .catch(error => console.log(error.message))
  )
}

export { getCurrentLocation, getSearchResults, toggleSearchResult, getAddressPredictions, getSelectedAddress }