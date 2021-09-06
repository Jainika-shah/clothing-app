import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shoppageComponent';
import Header from './components/header/headerComponent';
import signInPage from './pages/signInPage/signInComponent';
import { Switch,Route } from 'react-router-dom';
import {auth, createUserProfileDoc} from '../src/firebase/firebaseUtlis';

import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/userAction'
function App(){
  const [currentUser, setCurrentUser] = useState(null);

  let unSubscribeFromAuth = null;
  useEffect(() => {
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(userAuth);
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        // console.log(userRef);

        const snapShot = userRef.onSnapshot(snap => {
          // console.log(snap.data());
          setCurrentUser({
            userDetail :{
              id : snap.id,
              ...snap.data()
            } 
          })
        })
      }else{
        setCurrentUser(userAuth);
      }
    });
    return unSubscribeFromAuth;
  })



return <div>
  <Header/>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/shop" component={ShopPage}/>
    <Route exact path="/signin" component={signInPage}/>
  </Switch>
</div>

  // return <HomePage />
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
