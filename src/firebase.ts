// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwsxBJALkD4TjMClVne2eGp7_Xto3ZL2U",
  authDomain: "test-firebase-fbb19.firebaseapp.com",
  databaseURL: "https://test-firebase-fbb19-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-firebase-fbb19",
  storageBucket: "test-firebase-fbb19.firebasestorage.app",
  messagingSenderId: "758585227502",
  appId: "1:758585227502:web:e64a6f9bd045567409dbff",
  measurementId: "G-4LKLNLSYJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);