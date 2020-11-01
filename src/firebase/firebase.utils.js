import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDYXKryzNE6d2rnmvIs48sJQCWAELNQbZw',
  authDomain: 'crwn-db-2122c.firebaseapp.com',
  databaseURL: 'https://crwn-db-2122c.firebaseio.com',
  projectId: 'crwn-db-2122c',
  storageBucket: 'crwn-db-2122c.appspot.com',
  messagingSenderId: '228674683996',
  appId: '1:228674683996:web:74b69dd66ebaaeaac61299',
  measurementId: 'G-EPQS4778PZ'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
