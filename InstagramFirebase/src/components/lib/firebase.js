import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyBDbtEskv0ycg-jBobYt9Hd9bRCb-s0wAE",
  authDomain:"react-chat-25ac2.firebaseapp.com",
  projectId:"react-chat-25ac2",
  storageBucket:"react-chat-25ac2.firebasestorage.app",
  messagingSenderId:"265104677163",
  appId:"1:265104677163:web:dec7f9137de35ee4f3cd6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();