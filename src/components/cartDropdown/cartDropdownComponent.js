import React from "react";
import './cartDropdownStyles.scss';
import CustomBtn from '../customBtn/customBtnComponent';
function CartDropdown(){
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
    )
}
export default CartDropdown;