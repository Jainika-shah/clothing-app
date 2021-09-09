import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './cartIconStyles.scss';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
const CartIcon = (props) =>{

    const cartStyles = {
        fontSize : "2.2rem",
        position : "relative",
        top: "-10px",
        marginLeft:"1rem",
        cursor: "pointer"
    }
    console.log(props.itemCount);

    return <div className="cart-icon" onClick={props.toggleCart}>
        <ShoppingCartOutlinedIcon style={cartStyles}/>
        <span className="cart-icon-no">{props.itemCount}</span>
    </div>
}

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCart : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
// 

// export default CartIcon;