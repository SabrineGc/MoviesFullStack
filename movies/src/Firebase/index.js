// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdNnwwwU8fpbbVuO625vlilt0me9fR5y8",
  authDomain: "movies-37720.firebaseapp.com",
  projectId: "movies-37720",
  storageBucket: "movies-37720.appspot.com",
  messagingSenderId: "267826800755",
  appId: "1:267826800755:web:9d49841011a80bfcd42206",
  measurementId: "G-QESDH7E66V"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider= new GoogleAuthProvider()
const database = getFirestore();

export {auth, googleAuthProvider,database}
