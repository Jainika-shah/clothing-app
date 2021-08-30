import React from 'react';
import './menu-itemStyles.scss';

const MenuItem = ({title, image}) =>{
    return  <div className="menu-item">
    <div className="background-img" style={{backgroundImage : `url(${image})`}} />
    
    <div className="content">
        <h1 className="menu-title">{title}</h1>
        <p>Shop Now</p>
    </div>
</div>
}

export default MenuItem;