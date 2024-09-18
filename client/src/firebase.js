// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-b7ee7.firebaseapp.com",
  projectId: "mern-estate-b7ee7",
  storageBucket: "mern-estate-b7ee7.appspot.com",
  messagingSenderId: "591670989030",
  appId: "1:591670989030:web:53d72fb8619f605cb96b27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);