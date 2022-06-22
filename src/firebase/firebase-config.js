// import firebase from 'firebase/app'

import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYbRf6C0Rppz1VM_rW906-MlUYcEd8PWs",
    authDomain: "react-839a8.firebaseapp.com",
    projectId: "react-839a8",
    storageBucket: "react-839a8.appspot.com",
    messagingSenderId: "156854139480",
    appId: "1:156854139480:web:4be5800da5ef20baace82d",
    measurementId: "G-L51ZHCN9KQ"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuth =  getAuth(app)  

