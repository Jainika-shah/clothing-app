import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-itemComponent'
import './menu-containerStyles.scss';
import { connect } from 'react-redux';
import { selectMenuContainerSections } from '../../redux/menuContainer/containerSelectors'; 
const MenuContainer = ({sections}) =>{
console.log(sections);
  return <div className="menu-container">
    {
        sections.map((item) => {
           return <MenuItem key={item.id} image={item.image} title={item.title} LinkUrl={item.LinkUrl}/>
        })
    }
  </div>
}

const mapStateToProps = state => ({
  sections : selectMenuContainerSections(state)
})

export default connect(mapStateToProps)(MenuContainer);