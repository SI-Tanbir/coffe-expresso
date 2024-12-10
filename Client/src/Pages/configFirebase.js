// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUGJQe3EkQ4MaMGJpYBapDEQq0fmFJ6A",
  authDomain: "expreso-coffe.firebaseapp.com",
  projectId: "expreso-coffe",
  storageBucket: "expreso-coffe.firebasestorage.app",
  messagingSenderId: "728951206272",
  appId: "1:728951206272:web:eeef9a5c37f9e83da09165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
