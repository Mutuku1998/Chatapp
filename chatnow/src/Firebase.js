
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCd6Rrb-yyt4vL1lW1iOnHZUEtkVZPUq_U",
  authDomain: "chatnow-c26ce.firebaseapp.com",
  projectId: "chatnow-c26ce",
  storageBucket: "chatnow-c26ce.appspot.com",
  messagingSenderId: "38717713412",
  appId: "1:38717713412:web:d46b5ad457545fc6705951"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth()
  export const storage = getStorage();
  export const db = getFirestore()