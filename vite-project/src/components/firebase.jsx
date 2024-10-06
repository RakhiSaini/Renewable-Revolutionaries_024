// src/firebase.jsx
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCCiGU2Z6YRNJwQ8m1behr58MPRc-QiPU",
  authDomain: "present-flow.firebaseapp.com",
  projectId: "present-flow",
  storageBucket: "present-flow.appspot.com",
  messagingSenderId: "597815501440",
  appId: "1:597815501440:web:9d88edc6b876633ad1fc65"
};

// Initialize Firebase only if no apps are already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };