import React from 'react';
import './collection-itemStyles.scss';

function CollectionItem({id, name,price,imageURL}){
    return <div className="collection-item-container">
        <div className="image"
        style={{
            backgroundImage : `url(${imageURL})`
        }}/>

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
} 

export default CollectionItem;

