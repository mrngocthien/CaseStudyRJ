// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzn8mYLicQa-fYPnCXXrc-AyxfWcZ05iQ",
  authDomain: "music-web-e524c.firebaseapp.com",
  projectId: "music-web-e524c",
  storageBucket: "music-web-e524c.appspot.com",
  messagingSenderId: "386403844126",
  appId: "1:386403844126:web:aa7034f78090dace452e0f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {db, auth, provider}