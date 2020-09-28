import React from 'react';
import store from '../store/store';
import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_ADDRESS_INPUT,
  TOGGLE_SEARCH_RESULT,
  GET_ADDRESS_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  GET_DISTANCE_MATRIX,
  GET_PICKUP_LOCATION,
  GET_DROPOFF_LOCATION
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
      }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      (error) => console.log(error.message)
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

const getPickUpLocation = (dispatch, payload) => {
  dispatch({
    type: GET_PICKUP_LOCATION,
    payload
  }) 
}

const getDropOffLocation = (dispatch, payload) => {
  dispatch({
    type: GET_DROPOFF_LOCATION,
    payload
  })
}

const getSelectedAddress = (dispatch, placeId, makeFalsePayload) => {
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

export { getCurrentLocation, getDropOffLocation, getPickUpLocation, getSearchResults, toggleSearchResult, getSelectedAddress }