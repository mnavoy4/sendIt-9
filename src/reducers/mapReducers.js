import {
  GET_ADDRESS_INPUT,
  GET_ADDRESS_PREDICTIONS,
  GET_CURRENT_LOCATION_SUCCESS,
  TOGGLE_SEARCH_RESULT,
  GET_SELECTED_ADDRESS,
  GET_DISTANCE_MATRIX,
  SET_PICKUP_AND_DROPOFF_TO_FALSE
} from '../constants/mapConstants';
const denver = {
    latitude: 39.7392,
    longitude: -104.9903,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

function regionReducer(state=denver, action) {
  switch(action.type) {
    case GET_CURRENT_LOCATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function searchResultsReducer(state={ inputData: {} }, action) {
  switch(action.type) {
    case GET_ADDRESS_INPUT:
      return action.payload;
    default:
      return state;
  }
}

function toggleSearchResultReducer(state={ resultType: {} }, action) {
  switch(action.type) {
    case TOGGLE_SEARCH_RESULT:
      return action.payload;
    case SET_PICKUP_AND_DROPOFF_TO_FALSE:
      return action.payload;
    default: 
      return state;
  }
}

function addressPredictionsReducer(state={ addressPredictions: [] }, action) {
  switch (action.type) {
    case GET_ADDRESS_PREDICTIONS:
      return action.payload;
    default:
      return state;
  }
}

function selectedAddressReducer(state={ selectedAddress: {} }, action) {
  switch(action.type) {
    case GET_SELECTED_ADDRESS:
      return action.payload;
    default:
      return state;
  }
}

function distanceMatrixReducer(state={ distanceMatrix: {} }, action) {
  switch(action.type) {
    case GET_DISTANCE_MATRIX:
      return action.payload;
    default:
      return state;
  }
}


export { regionReducer, searchResultsReducer, toggleSearchResultReducer, addressPredictionsReducer, selectedAddressReducer, distanceMatrixReducer }