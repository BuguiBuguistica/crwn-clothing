// reducer is a function, receives the state and the action
// the action has a type (string) and a payload
import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload && action.payload.currentUser
      }
    default:
      return state
  }
}

export default userReducer;
