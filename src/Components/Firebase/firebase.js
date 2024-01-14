// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import * as firebase from "firebase/app";

import "firebase/auth";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmRuwCfh9Dn9mF8FikTUs6bLX7nAR60sM",
    authDomain: "linkedin-clone-942a3.firebaseapp.com",
    projectId: "linkedin-clone-942a3",
    storageBucket: "linkedin-clone-942a3.appspot.com",
    messagingSenderId: "1064931954470",
    appId: "1:1064931954470:web:c3a5a27f00d1a453babbe7",
    measurementId: "G-5120SF3YYJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
