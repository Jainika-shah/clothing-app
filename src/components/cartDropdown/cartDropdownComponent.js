import React from "react";
import './cartDropdownStyles.scss';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import { connect } from "react-redux";
import CartItem from "../cartItem/cartItemComponent";
import CustomBtn from '../customBtn/customBtnComponent';
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cartActions";
function CartDropdown({cartItems, history, dispatch}){

    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                
                cartItems.length ? 
                cartItems.map(cartitem => {       
                   return <CartItem key={cartitem.id} item={cartitem} />
                })
                :
                <p>No items added yet!</p>
            }
            <CustomBtn onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomBtn>
        </div>
        
    </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));