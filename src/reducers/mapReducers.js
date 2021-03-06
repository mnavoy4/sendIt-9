import {
  GET_ADDRESS_INPUT,
  GET_ADDRESS_PREDICTIONS,
  GET_CURRENT_LOCATION_SUCCESS,
  TOGGLE_SEARCH_RESULT,
  GET_SELECTED_ADDRESS,
  SET_PICKUP_AND_DROPOFF_TO_FALSE,
  GET_PICKUP_LOCATION,
  GET_DROPOFF_LOCATION
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

function pickUpLocationReducer(state={}, action){
  switch(action.type){
    case GET_PICKUP_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
function dropOffLocationReducer(state={}, action){
  switch(action.type){
    case GET_DROPOFF_LOCATION:
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

function addressPredictionsReducer(state={ addressPredictions: [] }, action) {
  switch (action.type) {
    case GET_ADDRESS_PREDICTIONS:
      return action.payload;
    default:
      return state;
  }
}




export { pickUpLocationReducer, regionReducer, searchResultsReducer, addressPredictionsReducer, dropOffLocationReducer }