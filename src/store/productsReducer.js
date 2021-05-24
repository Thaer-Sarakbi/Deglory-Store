import { GET_PRODUCTS, GET_PRODUCTS_DETAILS, GET_REVIEWS, EMPTY_STATE } from '../actions/actionTypes'

const initialState = {
    products: [],
    reviews: [],
    productDetails: ''
}
  
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS: 
       //console.log(action.payload)
        // return {
        //   ...state,
        // products: [...state.products, action.payload]
        // };
        return{ ...state, products: action.payload }
      case GET_PRODUCTS_DETAILS:
        return{ ...state, productDetails: action.payload }
      case GET_REVIEWS:
        return{ ...state,reviews: action.payload } 
      case EMPTY_STATE:
        return { ...state, productDetails : '' }
      default:
        return state;
    }
  }
  
  export default productsReducer