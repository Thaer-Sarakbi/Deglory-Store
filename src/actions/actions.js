import { GET_PRODUCTS } from './actionTypes'
import api from '../api'
import axios from 'axios';

const url = `${api.url.wc}products?consumer_key=${api.keys.consumerKey}&consumer_secret=${api.keys.consumerSecret}`;

export const getProducts = (dispatch) => (
  axios.get(url)
  .then(res => {
    dispatch({ type: GET_PRODUCTS, payload: res.data })
  })
);