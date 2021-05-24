import { GET_PRODUCTS, GET_PRODUCTS_DETAILS, GET_REVIEWS, EMPTY_STATE } from './actionTypes'
import axios from 'axios';

export const getProducts = (url) => (dispatch) => (
  //console.log(url)
  axios.get(url)
  .then((res) => {
    //console.log(res.data)
    dispatch({ type: GET_PRODUCTS, payload: res.data })
  })
);

export const getProductsDetails = (url) => async(dispatch) => (
  //console.log(url)
  await axios.get(url)
  .then((res) => {
    //console.log(res.data.name)
    dispatch({ type: GET_PRODUCTS_DETAILS, payload: res.data })
  })
  .catch(error => {
    console.log(error)
  })
);

export const getReviews = (url) => async(dispatch) => (
  //console.log(url)
  await axios.get(url)
  .then((res) => {
    dispatch({ type: GET_REVIEWS, payload: res.data })
  })
  .catch(error => {
    console.log(error)
  })
);

export const emptyState = () => {
 return{
  type: EMPTY_STATE
 }
}