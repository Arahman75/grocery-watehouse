// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZRoakC7XtJvfcRM6_kSFWmlTmRISJaBk",
  authDomain: "grocery-warehouse-b73d0.firebaseapp.com",
  projectId: "grocery-warehouse-b73d0",
  storageBucket: "grocery-warehouse-b73d0.appspot.com",
  messagingSenderId: "291258096835",
  appId: "1:291258096835:web:52d618e4e84c4de3c8d676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;