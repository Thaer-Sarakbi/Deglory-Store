import { GET_USERS } from '../actions/actionTypes'

const initialState = {
    users: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS: 
       //console.log(action.payload)
        return { ...state, users: action.payload };
      default:
        return state;
    }
  }
  
  export default userReducer