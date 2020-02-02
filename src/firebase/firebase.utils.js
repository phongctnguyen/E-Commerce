import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAqpXi3BqvArjnaJU8hPDKeLrDJjOnXLa4',
  authDomain: 'crwn-db-5514a.firebaseapp.com',
  databaseURL: 'https://crwn-db-5514a.firebaseio.com',
  projectId: 'crwn-db-5514a',
  storageBucket: 'crwn-db-5514a.appspot.com',
  messagingSenderId: '957319796115',
  appId: '1:957319796115:web:8fc5f7dfe0aaafac5cc466',
  measurementId: 'G-5DZL6SK8QC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;