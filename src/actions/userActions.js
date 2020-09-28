import Axios from 'axios';
import React from 'react';
import { CREATE_NEW_USER, GET_EMAIL_PASSWORD_INFO } from '../constants/userConstants';
import axios from 'axios';
const usersURL = 'http://localhost:5000/users'

const createNewUser = (dispatch, newUser) => {
  axios.post(`${usersURL}/add`, newUser)
    .then(response => dispatch({ type: CREATE_NEW_USER, payload: response.data }))
}

const getEmailPasswordInfo = (dispatch, info) => {
  dispatch({ type: GET_EMAIL_PASSWORD_INFO, payload: info })
}

export { createNewUser, getEmailPasswordInfo }