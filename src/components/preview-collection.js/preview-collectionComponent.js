import React from 'react';
import './preview-collectionStyles.scss';
import CollectionItem from '../collection-item/collection-itemComponent';


function PreviewCollection({title, items, id}){
    return <div className="collection-preview-container">
        <h1 className="title">{title}</h1>
        <div className="preview-item">
            {
                items
                .filter((item, index) => {
                    return index < 4;
                })
                .map(item => {
                    return <CollectionItem key={item.id} item={item}> {item.name} </CollectionItem>
                })
            }
        </div>
    </div>
}

export default PreviewCollection;
