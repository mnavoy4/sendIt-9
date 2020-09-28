import React from 'react';
import { CREATE_NEW_USER, GET_EMAIL_PASSWORD_INFO } from '../constants/userConstants'

const createNewUser = (dispatch, newUser) => {
  dispatch({ type: CREATE_NEW_USER, payload: newUser })
}

const getEmailPasswordInfo = (dispatch, info) => {
  dispatch({ type: GET_EMAIL_PASSWORD_INFO, payload: info })
}

export { createNewUser, getEmailPasswordInfo }