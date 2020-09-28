import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  addressPredictionsReducer,
  selectedAddressReducer,
  pickUpLocationReducer,
  regionReducer,
  searchResultsReducer,
  toggleSearchResultReducer,
  distanceMatrixReducer,
  dropOffLocationReducer
} from '../reducers/mapReducers'
import { postRideReducer, ridesReducer } from '../reducers/rideReducers';
import { emailPasswordInfoReducer, newUserReducer } from '../reducers/userReducers';

const log = createLogger({ diff: true, collapsed: true });

const initialState = {};
const middleware = [thunk, log];
const enhancers = [];
const reducer = combineReducers({
  // home: HomeReducer,
  region: regionReducer,
  rides: ridesReducer,
  postRide: postRideReducer,
  newUser: newUserReducer,
  // searchResults: searchResultsReducer,
  // toggleSearchResult: toggleSearchResultReducer,
  pickUpLocation: pickUpLocationReducer,
  dropOffLocation: dropOffLocationReducer,
  emailPasswordInfo: emailPasswordInfoReducer
  // addressPredictions: addressPredictionsReducer,
  // selectedAddress: selectedAddressReducer,
  // distanceMatrix: distanceMatrixReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware, ...enhancers)));

export default store
