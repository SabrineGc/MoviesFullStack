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
  apiKey: "AIzaSyDLDG2dB9F3xlkJgQ9Zv0YCuf8NdUlS73A",
  authDomain: "moviess-5e494.firebaseapp.com",
  projectId: "moviess-5e494",
  storageBucket: "moviess-5e494.appspot.com",
  messagingSenderId: "928606654856",
  appId: "1:928606654856:web:1dcdd56576bb82a83bea3d",
  measurementId: "G-G9TTQD5XTE"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider= new GoogleAuthProvider()
const database = getFirestore();

export {auth, googleAuthProvider,database}