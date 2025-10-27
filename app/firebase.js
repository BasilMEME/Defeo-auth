// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfR1P1YEByn2cshWA22GI1q-7dLeaLvqw",
  authDomain: "defeo-auth.firebaseapp.com",
  projectId: "defeo-auth",
  storageBucket: "defeo-auth.firebasestorage.app",
  messagingSenderId: "736257172299",
  appId: "1:736257172299:web:70d9c518627a7b683d3ece",
  measurementId: "G-W2J08BT211"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize providers
export const auth = getAuth(app); // ✅ pass app
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
