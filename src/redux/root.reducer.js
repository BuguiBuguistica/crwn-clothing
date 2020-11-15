// reprensent all the state of our app
// combine all the states

import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer
})
