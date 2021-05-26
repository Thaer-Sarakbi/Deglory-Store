import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes'

const initialState = {
    orders: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART: 
        //console.log(action.payload.product)
        return{ ...state, orders: [action.payload.product] }
      case REMOVE_FROM_CART: 
        //console.log(action.payload.id)
        let orders = state.orders.filter(function(item) {
          if(item.id !== action.payload.id){
            return{
              item
            }
          }
      })
        return{ ...state, orders }
      default:
        return state;
    }
  }
  
  export default cartReducer