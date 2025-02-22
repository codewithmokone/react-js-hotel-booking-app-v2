// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirebase,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "hotel-booking-v2-a6ae7.firebaseapp.com",
    projectId: "hotel-booking-v2-a6ae7",
    storageBucket: "hotel-booking-v2-a6ae7.appspot.com",
    messagingSenderId: "248508023560",
    appId: "1:248508023560:web:02c8ac1c7be2e7804462bd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
