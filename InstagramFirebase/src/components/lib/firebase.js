
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "chat-gshix.firebaseapp.com",
  projectId: "chat-gshix",
  storageBucket: "chat-gshix.firebasestorage.app",
  messagingSenderId: "746503016299",
  appId: "1:746503016299:web:d8daf040c5d7f5c66bc62e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();