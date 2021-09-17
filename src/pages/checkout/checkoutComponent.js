import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/checkoutItemComponent';
import './checkoutStyles.scss';
import StripeCheckoutBtn from '../../components/stripe-button/stripebtnComponent';
function checkOutPage({cartItems, total}) {
    console.log(total)
    return <div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)
    }
    <div className='total'>
        <span>Total : ${total}</span>
    </div>
    <div class='payment-btn'>
    <StripeCheckoutBtn price={total}/>
    </div>

    <p className='test-para'>Test credit card no : 4242 4242 4242 4242. <br></br>
        Any future date and any 3 digit nos for cvs.
  

    </p>
    </div>
}

const mapStateToProps = state => ({
    cartItems : state.cart.cartItems,
    total : state.cart.cartItems.reduce((acc,item) => acc + item.quantity * item.price, 0)
})


export default connect(mapStateToProps)(checkOutPage);