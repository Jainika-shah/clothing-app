import { Route } from 'react-router-dom';
import CollectionOverview from "../../components/collectionOverview/collectionOverviewComponent";
 import CategoryPage from "../category/categoryComponent";
function ShopPage({match}){
    return <div>
    
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
    
    </div>
}

export default ShopPage;