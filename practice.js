// 1. Index.js
import { BrowserRouter } from 'react-router-dom';

// Thats how to use BrowserRoute-
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );


// 2.  App.js
import { Route } from 'react-router-dom';

// The path should be exactly same
<div>
<Route exact path="/" component={HomePage}/>
<Route exact path="/shoes" component={Shoes}/>

{/* // The path has to be same but after that you can add anything. */}
<Route exact path="/" component={HomePage}/>
<Route exact path="/shoes" component={Shoes}/>
</div>
// here,both the components would get render, if you access localhost.



// 3. Switch
import { Switch,Route } from 'react-router-dom';
// It renders the first path that matched the url.
<Switch>
    <Route  path="/" component={HomePage}/>
    <Route  path="/shoes" component={Shoes}/>
</Switch>




//4. Props that react-router-dom pass :
function Shoes(props){
    console.log(props)  // All the props
    console.log(props.match.params.id);  //The params in url
    return <h1>Shoes here </h1>
  }
<Route path="/shoes/:id" component={Shoes}/>  


//5. Links
import { Switch,Route, Link } from 'react-router-dom';
<Link to="shoes/15">Shoes</Link>

//6. push
{
<div>
    <button onClick={() => {
        props.history.push('/shoes/12');
    }}></button>
</div>
}



//7. To call a route using a button of child component
import { withRouter } from "react-router-dom";

const MenuItem = ({history, match, LinkUrl}) =>{

  // history and match comes using withRouter(), and linkurl is just an eg of props.
  return  <div className="menu-item" 
  onClick={() => { history.push(`${match.url}${LinkUrl}`) }}
  ></div>
}
export default withRouter(MenuItem);