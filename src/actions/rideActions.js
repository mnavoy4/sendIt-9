import React from 'react';
import {
  GET_ALL_RIDES,
  POST_RIDE,
  GET_RIDE_DETAILS
} from '../constants/rideConstants'
import axios from 'axios';
const ridesURL = 'http://localhost:5000/rides';

const listRides = (dispatch) => {
  axios.get(ridesURL)
    .then(response => dispatch({ type: GET_ALL_RIDES, payload: response.data }));
};

const postRide = (dispatch, ride, navigation) => {
  axios.post(`${ridesURL}/add`, ride)
    .then(response => {
      dispatch({ type: POST_RIDE, payload: response.data })
      navigation.navigate('Find Ride', {ride: response.data})
    })
};

const getRideDetails = (dispatch, id) => {
  axios.get(`${ridesURL}/${id}`)
    .then(response => dispatch({ type: GET_RIDE_DETAILS, payload: response.data }));
};

export { listRides, postRide, getRideDetails }