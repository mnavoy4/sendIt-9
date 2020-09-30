import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  pickUpLocationReducer,
  regionReducer,
  dropOffLocationReducer
} from '../reducers/mapReducers'
import { postRideReducer, rideDetailsReducer, ridesReducer } from '../reducers/rideReducers';
import { emailPasswordInfoReducer, newUserReducer, signInUserReducer } from '../reducers/userReducers';

const log = createLogger({ diff: true, collapsed: true });

const initialState = {};
const middleware = [thunk, log];
const enhancers = [];
const reducer = combineReducers({
  region: regionReducer,
  rides: ridesReducer,
  postRide: postRideReducer,
  newUser: newUserReducer,
  rideDetails: rideDetailsReducer,
  pickUpLocation: pickUpLocationReducer,
  dropOffLocation: dropOffLocationReducer,
  signInUser: signInUserReducer,
  emailPasswordInfo: emailPasswordInfoReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware, ...enhancers)));

export default store
