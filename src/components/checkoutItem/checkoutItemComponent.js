import React from 'react';
import './checkoutStyles.scss';

const CheckoutItem = ({item : {name, quantity, imageUrl, price}}) =>{
    return <div className='checkout-item'> 
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='remove-btn'>&#10005;</span>

    </div>

}
export default CheckoutItem;