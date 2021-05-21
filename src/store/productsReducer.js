import { GET_PRODUCTS } from '../actions/actionTypes'

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    console.log(action)
    // switch (action.type) {
    //   case ADD_FOOD:
    //     return {
    //       ...state,
    //       foodList: state.foodList.concat({
    //         key: Math.random(),
    //         food: action.data.food
    //       })
    //     };
    //   case DELETE_FOOD:
    //     return {
    //       ...state,
    //       foodList: state.foodList.filter((item) =>
    //         item.key !== action.key)
    //     };
    //   default:
    //     return state;
    // }
    return state
  }
  
  export default productsReducer