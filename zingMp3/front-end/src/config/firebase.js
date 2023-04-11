// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
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

const auth = getAuth(app);

const storage = getStorage(app)

const provider = new GoogleAuthProvider();

export {storage, auth, provider}