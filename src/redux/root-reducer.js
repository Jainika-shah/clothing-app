import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import cartReducer from "./cart/cartReducer";
import shopReducer from './shop/shopReducer';

import menuContainerReducer from "./menuContainer/containerReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}

const rootReducer =  combineReducers({
    // the key user will help to distinguish between all the reducers.
    user : userReducer,
    cart : cartReducer,
    menuContainer : menuContainerReducer,
    shop : shopReducer
})

export default persistReducer(persistConfig, rootReducer);

