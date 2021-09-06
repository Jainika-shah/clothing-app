import React, {useState} from 'react';
import FormInput from '../formInput/formInputComponent';
import './signInStyles.scss';
import {auth, signInWithGoogle} from '../../firebase/firebaseUtlis';
import CustomBtn from '../customBtn/customBtnComponent';
// import signInPage from '../../pages/signInPage/signInComponent';
function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        }catch(error){
            console.log(error.message);
        }

       
    }

    return <div>
        <h2>Already have an accout?</h2>
        <p>Sign In with Email and Password</p>

        <form onSubmit={handleSubmit} className="signin">
            <FormInput name="email"  label="Email" type="email" value={email} required handleChange={handleEmailChange}/>
            <FormInput name="password" label="Password" type="password" value={password} required handleChange={handlePasswordChange}/>
        
            <div className="buttons">
                <CustomBtn type="submit"> Sign In</CustomBtn><br></br>
                <CustomBtn isGoogleSignBtn onClick={signInWithGoogle}>Sign In with Google</CustomBtn>
            </div>
        </form>
    </div>
}

export default SignIn;