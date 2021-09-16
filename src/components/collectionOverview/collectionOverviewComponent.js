import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shopSelectors';
import PreviewCollection from '../../components/preview-collection.js/preview-collectionComponent';


function CollectionOverview({collections}){
    console.log(collections);
    return <div>
    {
        collections.map(item => { 
        return <PreviewCollection key={item.id} title={item.title} items={item.items}/>
    })
    }
</div>
}
const mapStateToProps = state => ({
    collections : selectCollectionForPreview(state)
})
export default connect(mapStateToProps)(CollectionOverview);