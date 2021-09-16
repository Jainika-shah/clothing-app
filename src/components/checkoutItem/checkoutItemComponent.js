import React from 'react';
import './checkoutStyles.scss';
import { connect } from 'react-redux';
import { clearItem, addItem, decreaseItem } from '../../redux/cart/cartActions';

const CheckoutItem = ({item, RemoveItem, DecreaseItem, AddItem}) =>{
    const {name, quantity, imageUrl, price} = item ;
    return <div className='checkout-item'> 
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
         <div className='arrow'   onClick={() => DecreaseItem(item)}>&#10094;</div>
          <span className='value' >{quantity}</span>
          <div className='arrow' onClick={() => AddItem(item)}>&#10095;</div>

        </span>
        <span className='price'>{price}</span>
        <span className='remove-btn' onClick={() => {
                RemoveItem(item);
        }}>&#10005;</span>

    </div>

}
const mapDispatchToProps = (dispatch) =>({
    RemoveItem : item => dispatch(clearItem(item)),
    AddItem : item => dispatch(addItem(item)),
    DecreaseItem : item => dispatch(decreaseItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);