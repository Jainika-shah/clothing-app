import { combineReducers } from "redux";
import userReducer from './user/userReducer';

export default combineReducers({
    // the key user will help to distinguish between all the reducers.
    user : userReducer
})

