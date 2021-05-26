import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import userReducer from './usersReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    productsReducer,
    userReducer,
    cartReducer
})

export default rootReducer