import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-itemComponent'
import './menu-containerStyles.scss';

const MenuContainer = () =>{
    const [sections, setSections] = useState([
        {
            id: 1,
            title : 'Hats',
            image : 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
            id: 2,
            title : 'Footwear',
            image : 'https://images.unsplash.com/photo-1515762909411-f9aea3cb6969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        },
        {
            id: 3,
            title : 'Accessories',
            image : 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
        },
        {
            id: 4,
            title : 'Women',
            image : 'https://images.unsplash.com/photo-1574255155611-e864ecb66c0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'
        },
        {
            id: 5,
            title : 'Men',
            image : 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }

    ]);

  return <div className="menu-container">
    {
        sections.map((item) => {
           return <MenuItem key={item.id} image={item.image} title={item.title}/>
        })
    }
  </div>
}

export default MenuContainer;