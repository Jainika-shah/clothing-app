import React from 'react';
import './menu-itemStyles.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({title, image,history, match, LinkUrl}) =>{

    return  <div className="menu-item" 
    onClick={() => { history.push(`${match.url}${LinkUrl}`) }}
    >
    <div className="background-img" style={{backgroundImage : `url(${image})`}} />
    
    <div className="content">
        <h1 className="menu-title">{title}</h1>
        <p>Shop Now</p>
    </div>
</div>
}

export default withRouter(MenuItem);