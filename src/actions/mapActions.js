import React from 'react';
import store from '../store/store';
import {
  GET_CURRENT_LOCATION_SUCCESS,
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

export { getCurrentLocation, getDropOffLocation, getPickUpLocation }