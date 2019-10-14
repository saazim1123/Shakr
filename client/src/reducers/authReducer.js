import { FETCH_USER, LOGOUT } from '../actions/types'
import { userConstants } from '../constants/userConstants'

export default function(state = null, action) {
    console.log('action', action)
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false
        case LOGOUT:
            localStorage.removeItem('token')
            return;
        default:
            return state;
    }
}



let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}