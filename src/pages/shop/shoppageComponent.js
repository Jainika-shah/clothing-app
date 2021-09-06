import React, { useState } from 'react';
import ShopData from './shopData';
import PreviewCollection from '../../components/preview-collection.js/preview-collectionComponent';

function ShopPage(){
    const [collections] = useState(ShopData);

    return <div>
        {
            collections.map(item => { 
                return <PreviewCollection key={item.id} title={item.title} items={item.items}/>
            })
        }
    </div>
}
export default ShopPage;