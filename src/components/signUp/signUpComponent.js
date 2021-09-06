import React, {useState} from 'react';
import './signUpstyles.scss';
import FormInput from '../formInput/formInputComponent';
import CustomBtn from '../customBtn/customBtnComponent';
import { createUserProfileDoc, auth } from '../../firebase/firebaseUtlis';

function SignUp(){
    const [userDetails, setUserDetails] = useState({
        displayName : '',
        email :'',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = userDetails;
        if(password !== confirmPassword){
            alert('Password didnt macthed');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, {displayName});
            setUserDetails({
                displayName : '',
                email :'',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserDetails(prevValue =>{
          return { ...prevValue,
            [name] : value}
        })
    }

    const {displayName, email, password, confirmPassword} = userDetails;
    return <div className="sign-up">
        <h2>I am new</h2>
        <span>Sign Up with Email and Password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={handleChange}
            label="User name"
            >
            </FormInput>

            <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={handleChange}
            label="Email Address"
            >
            </FormInput>

            <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={handleChange}
            label="Password"
            >
            </FormInput>

            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            >
            </FormInput>
            <CustomBtn type="submit">Sign Up </CustomBtn>
        </form>

    </div>
}
export default SignUp;