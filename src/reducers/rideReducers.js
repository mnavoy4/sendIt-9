import { GET_ALL_RIDES, POST_RIDE } from '../constants/rideConstants';

function ridesReducer(state={rides: []}, action){
  switch(action.type){
    case GET_ALL_RIDES:
      return { rides: action.payload };
    default:
      return state;
  }
}

function postRideReducer(state={}, action){
  switch(action.type){
    case POST_RIDE:
      return action.payload;
    default:
      return state;
  }
}

export { ridesReducer, postRideReducer }