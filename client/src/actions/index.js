import { FETCH_USER, LOGOUT} from './types'
import URL_ROOT from './URL'

export const token = localStorage.getItem('token')


export const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
  };


export const handleErrors = response => {
  console.log(response)
  if (!response.ok) throw Error(response.statusText);
  return response
}

//=================================================USER FUNCTIONS
export const getCurrentUser = (username, password) => {
    return dispatch => fetch(`${URL_ROOT}current_user`,{
       method: 'GET',
       headers: headers })
      .then(handleErrors)
      .then(res => res.json())
      .then(res => { dispatch({type: FETCH_USER, payload: res}) })
      .catch(function(error) {
        console.log(error);
      })
  }
     export const logout = () => {
       return dispatch => {
         dispatch({type: LOGOUT })
       }
     }
  