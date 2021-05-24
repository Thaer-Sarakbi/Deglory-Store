import { GET_USERS } from './actionTypes'
import axios from 'axios';

export const getUsers = (url) => (dispatch) => (
    //console.log(url)
    axios.get(url)
    .then((res) => {
      //console.log(res.data)
      dispatch({ type: GET_USERS, payload: res.data })
    })
  );