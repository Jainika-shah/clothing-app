import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDMAncG4kp1vwciXhLmyAUQ1QscPo-Vlg8",
    authDomain: "clothing-web-app-22818.firebaseapp.com",
    projectId: "clothing-web-app-22818",
    storageBucket: "clothing-web-app-22818.appspot.com",
    messagingSenderId: "474539347544",
    appId: "1:474539347544:web:18cb5aa47fc5b38899842d",
    measurementId: "G-7J79YXN15N"
  };

  export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) { return; }
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      }
      catch(error){
        console.log('error creating user', error);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;