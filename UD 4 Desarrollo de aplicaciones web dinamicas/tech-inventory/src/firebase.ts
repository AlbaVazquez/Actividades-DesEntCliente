// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJRJnhGyV74ao1EHtkLVLBnrntzFcPRg",
  authDomain: "tech-inventory-albavazquez.firebaseapp.com",
  projectId: "tech-inventory-albavazquez",
  storageBucket: "tech-inventory-albavazquez.firebasestorage.app",
  messagingSenderId: "538806608610",
  appId: "1:538806608610:web:e14cf948b1a1c3b28734bb",
  measurementId: "G-YR5RHQNRY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);