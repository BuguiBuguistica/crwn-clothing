// reducer is a function, receives the state and the action
// the action has a type (string) and a payload

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
		console.log('reducer ', action.payload)
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer;
