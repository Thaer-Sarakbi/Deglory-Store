import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes'

export const cartActions = (product) => {
    //console.log(product)
    return{
      type: ADD_TO_CART,
      payload: {
        product
      }
    }
}

export const removeProduct = (id) => {
  console.log(id)
  return{
    type: REMOVE_FROM_CART,
    payload: {
      id
    }
  }
}