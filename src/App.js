import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shoppageComponent';
import Header from './components/header/headerComponent';
import SignInPage from './pages/signInPage/signInComponent';
import { Switch,Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDoc} from '../src/firebase/firebaseUtlis';
import checkOutPage from './pages/checkout/checkoutComponent';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/userAction';


function App(props){
  
  useEffect(() => {
    let unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

       userRef.onSnapshot(snap => {
        
          props.SetCurrentUser({
            id : snap.id,
            ...snap.data()
          })
        })
        console.log(props.SetCurrentUser);
      }else{
        props.SetCurrentUser(userAuth);
      }
    });
    return unSubscribeFromAuth;
  })




return <div>
  <Header/>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/shop" component={ShopPage}/>
    <Route exact path ="/checkout" component={checkOutPage}/>
    <Route exact path="/signin" render={() => props.currentUser ? (<Redirect to="/" />) : (<SignInPage/>)}/>
  </Switch>
</div>

  // return <HomePage />
}


// use mapStateToProps when you need to access the value of state
// this () goes to userReducer for the currentUser value
const mapStateToProps = ({user}) =>{
  return {
    currentUser : user.currentUser
  }
}

// use mapDispatchToProps when you need to set state.
// this () goes to userAction to set the currentuser value
const mapDispatchToProps = dispatch =>({
  SetCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
