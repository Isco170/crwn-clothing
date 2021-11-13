import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBKuLBWjo7sjD-Kfa7HB33P5iIheDEuYhM",
  authDomain: "crwn-db-3c289.firebaseapp.com",
  projectId: "crwn-db-3c289",
  storageBucket: "crwn-db-3c289.appspot.com",
  messagingSenderId: "478800499999",
  appId: "1:478800499999:web:970d58a00bd94ac11e0c2a",
  measurementId: "G-88B3DJDNG9"
};
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;