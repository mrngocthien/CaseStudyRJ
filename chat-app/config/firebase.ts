// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-PgY_buyB7OsxbT9HT0SPvOZrFb1wpfw",
  authDomain: "simple-chat-app-27abe.firebaseapp.com",
  projectId: "simple-chat-app-27abe",
  storageBucket: "simple-chat-app-27abe.appspot.com",
  messagingSenderId: "160212403931",
  appId: "1:160212403931:web:bb95594ddb9699ec74aefe"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {db, auth, provider}