import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyBIqvIzpBvFVspkVtcHsJVdeOPYUOiRoTA",
    authDomain: "shoppingapp-17d07.firebaseapp.com",
    projectId: "shoppingapp-17d07",
    storageBucket: "shoppingapp-17d07.appspot.com",
    messagingSenderId: "968826696523",
    appId: "1:968826696523:web:77c6988fa418d44df8aece"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'select_account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;