import CartActionTypes from "./cartTypes";
import { addItemToCart, decreaseItemToCart } from "./cartUtils";
const INITIAL_STATE ={
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN : 
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_ITEM : 
        return {
            ...state,
            cartItems : addItemToCart(state.cartItems, action.payload)
        }
        case CartActionTypes.DECREASE_ITEM:
            return{
                ...state,
                cartItems : decreaseItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems : state.cartItems.filter(item => 
                    item.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}
export default cartReducer;