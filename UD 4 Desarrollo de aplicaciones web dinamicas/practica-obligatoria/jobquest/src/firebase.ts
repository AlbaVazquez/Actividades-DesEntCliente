// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3GbUfOtA_3GaEe_VB8oSjKpp4tushovk",
    authDomain: "jobquest-albavazquezguillen.firebaseapp.com",
    projectId: "jobquest-albavazquezguillen",
    storageBucket: "jobquest-albavazquezguillen.firebasestorage.app",
    messagingSenderId: "886935507724",
    appId: "1:886935507724:web:e23a008284a5e51e796f29",
    measurementId: "G-LJ0HMR6Q73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);