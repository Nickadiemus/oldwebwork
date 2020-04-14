//main import(s)
import axios from 'axios';

//makes post to server for sign up
export function userSignupRequest(userData) {
  return dispach =>
  {
    return axios.post('/api/users', userData)
  }
}
