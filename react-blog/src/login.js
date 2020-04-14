import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';
import { SET_CURRENT_USER } from './actions/types'

//logs user out and delete's browser auth Token
export function logout(){
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  }
}

//sets user to current
export function setCurrentUser(user){
  return{
    type: SET_CURRENT_USER,
    user
  }
}

//dispatches a post request to server to validate user credentials
export function userLogin(data) {
  return dispatch =>
  {
    return axios.post('/api/auth', data).then(res =>{
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}
