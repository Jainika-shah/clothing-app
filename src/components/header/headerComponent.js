import React from 'react';
import {Link} from 'react-router-dom';
import './headerStyles.scss';
import { auth } from '../../firebase/firebaseUtlis';

// connect: higher order component that lets our component get access to redux.
import { connect } from 'react-redux';
import CartDropdown from '../cartDropdown/cartDropdownComponent';
import CartIcon from '../cartIcon/cartIconComponent';

function Header({currentUser, hidden}){
    console.log(currentUser);
    return <div className="header">
        <Link to='/' className="logo-container">
            <h2>JS</h2>
        </Link>
        <div className="header-options">
            <Link to='/shop'>SHOP</Link>
            <Link to='/contact'>CONTACT</Link>
            {
                currentUser ? <div className="signOut-btn" onClick={() => {
                    auth.signOut();
                    console.log('signed out')

                    }}>
                    SIGN OUT
                </div> : <Link to="/signin">SIGN IN</Link>
                
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :<CartDropdown/>
        }
        
    </div>
}

// a () that allows us to access the rootReducer. 
// use mapStateToProps when you need the value of state
const mapStateToProps = (state) =>({
    // returning the currentUser so we can use it in our component.
    // state.user.currentUser : comes from the rootreducer
    currentUser : state.user.currentUser,
    hidden : state.cart.hidden
})
export default connect(mapStateToProps)(Header);