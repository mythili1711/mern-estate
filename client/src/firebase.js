// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-5600a.firebaseapp.com",
  projectId: "mern-stack-5600a",
  storageBucket: "mern-stack-5600a.firebasestorage.app",
  messagingSenderId: "494728541466",
  appId: "1:494728541466:web:0671e1de2d4dd5a795a8a3",
  measurementId: "G-PT7LK1QCQH"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);