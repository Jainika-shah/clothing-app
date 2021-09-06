import React from 'react';
import './collection-itemStyles.scss';
import CustomBtn from '../customBtn/customBtnComponent';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

function CollectionItem({item, addItemProp}){
    // name={item.name} imageURL={item.imageUrl} price={item.price}

    const {name,price,imageUrl} = item;
    return <div className="collection-item-container">
        <div className="image"
        style={{
            backgroundImage : `url(${imageUrl})`
        }}/>

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomBtn onClick={() => addItemProp(item)} inverted >Add to cart</CustomBtn>
    </div>
}

const mapDispathToProps = dispatch =>({
    addItemProp : item => dispatch(addItem(item))
})
export default connect(null, mapDispathToProps)(CollectionItem);

