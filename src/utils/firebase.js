// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3nBX2VVUK1T0VoeTpFeBnBBChz-vhK5I",
  authDomain: "netflixgpt-85190.firebaseapp.com",
  projectId: "netflixgpt-85190",
  storageBucket: "netflixgpt-85190.firebasestorage.app",
  messagingSenderId: "555728249512",
  appId: "1:555728249512:web:bba33e33bb2ed09fb6989d",
  measurementId: "G-2PNXSBEPE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
