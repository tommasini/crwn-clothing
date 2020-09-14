import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCYxzyX29i8x6Ex5PVnLLXVGueLBLAdQkY",
  authDomain: "crwn-db-95d10.firebaseapp.com",
  databaseURL: "https://crwn-db-95d10.firebaseio.com",
  projectId: "crwn-db-95d10",
  storageBucket: "crwn-db-95d10.appspot.com",
  messagingSenderId: "217717924503",
  appId: "1:217717924503:web:0ce5cbe0fb9b023b34bfd2",
  measurementId: "G-FX3DX1C9YY"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
      });
    }catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;