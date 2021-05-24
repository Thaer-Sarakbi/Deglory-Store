import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import userReducer from './usersReducer'

const rootReducer = combineReducers({
    productsReducer,
    userReducer
})

export default rootReducer