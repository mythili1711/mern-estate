// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d49ad.firebaseapp.com",
  projectId: "mern-estate-d49ad",
  storageBucket: "mern-estate-d49ad.firebasestorage.app",
  messagingSenderId: "851361577275",
  appId: "1:851361577275:web:503c8375ba0e44ed7e5f1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);