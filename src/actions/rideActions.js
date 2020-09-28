import React from 'react';
import { GET_ALL_RIDES, POST_RIDE } from '../constants/rideConstants'
import axios from 'axios';
const ridesURL = 'http://localhost:5000/rides';

const listRides = (dispatch) => {
  axios.get(ridesURL)
    .then(response => dispatch({ type: GET_ALL_RIDES, payload: response.data }));
}

const postRide = (dispatch, ride) => {
  axios.post(`${ridesURL}/add`, ride)
    .then(response => dispatch({ type: POST_RIDE, payload: response.data }));
}

export { listRides, postRide }