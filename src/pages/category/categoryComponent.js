import React from 'react';
import './categoryStyles.scss';
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/collection-item/collection-itemComponent';

function CategoryPage({category}) {
    const {title, items} =category
    console.log(category)
    return <div class='category-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
    </div>
}
const mapStateToProps = (state,ownProps) =>{
    return {category : selectCategory(ownProps.match.params.categoryId)(state) }
}
export default connect(mapStateToProps)(CategoryPage);