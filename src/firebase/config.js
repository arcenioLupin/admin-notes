// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd8cjNC1qcCrYZhO5eG1dcAn-RPgqvicI",
  authDomain: "react-cursos-2cd55.firebaseapp.com",
  projectId: "react-cursos-2cd55",
  storageBucket: "react-cursos-2cd55.appspot.com",
  messagingSenderId: "267498419914",
  appId: "1:267498419914:web:4e1cd51610ed64813a2633"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);