import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA6gaVHKmTeMyonyT2DUwMR0BOCyrebGME",
  authDomain: "devrabiccourse-108e5.firebaseapp.com",
  projectId: "devrabiccourse-108e5",
  storageBucket: "devrabiccourse-108e5.firebasestorage.app",
  messagingSenderId: "385376758670",
  appId: "1:385376758670:web:581135e4865cda623112df",
  measurementId: "G-MF126XL0SE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();
