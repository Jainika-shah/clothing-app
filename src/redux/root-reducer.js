import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import cartReducer from "./cart/cartReducer";
export default combineReducers({
    // the key user will help to distinguish between all the reducers.
    user : userReducer,
    cart : cartReducer
})

