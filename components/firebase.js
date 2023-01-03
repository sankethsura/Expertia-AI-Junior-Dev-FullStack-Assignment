// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg0BSdYVFZTcz7uwNnsOWJg2nldFWnIqg",
  authDomain: "expertia-assignment.firebaseapp.com",
  projectId: "expertia-assignment",
  storageBucket: "expertia-assignment.appspot.com",
  messagingSenderId: "696203931960",
  appId: "1:696203931960:web:620a3849086f12404c51cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

