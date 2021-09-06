import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './cartIconStyles.scss';

const CartIcon = (props) =>{

    const cartStyles = {
        fontSize : "2.2rem",
        position : "relative",
        top: "-10px",
        marginLeft:"1rem",
        cursor: "pointer"
    }

    return <div className="cart-icon" onClick={props.toggleCart}>
        <ShoppingCartOutlinedIcon style={cartStyles}/>
        <span className="cart-icon-no">0</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    toggleCart : () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
// 

// export default CartIcon;