import { CREATE_NEW_USER,
  GET_EMAIL_PASSWORD_INFO,
  SIGN_IN_USER
} from '../constants/userConstants'

function newUserReducer(state={}, action){
  switch(action.payload){
    case CREATE_NEW_USER:
      return action.payload;
    default:
      return state;
  }
};

function emailPasswordInfoReducer(state={}, action){
  switch(action.type){
    case GET_EMAIL_PASSWORD_INFO:
      return action.payload;
    default:
      return state;
  }
}

function signInUserReducer(state={}, action){
  switch(action.type){
    case SIGN_IN_USER:
      return action.payload;
    default:
      return state;
  }
}
export { newUserReducer, emailPasswordInfoReducer, signInUserReducer }