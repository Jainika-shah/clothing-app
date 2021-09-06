import React from 'react';
import './signInStyles.scss';
import SignIn from '../../components/signIn/signInComponent';
import SignUp from '../../components/signUp/signUpComponent';
function signInPage(){
    return <div className="page-container">
        <SignIn/>
        <SignUp/>
    </div>
}
export default signInPage;