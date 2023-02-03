// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi6wUzopDG_7VaaGsWSF_J2ZnZU42NZW4",
  authDomain: "janebbshower2023.firebaseapp.com",
  projectId: "janebbshower2023",
  storageBucket: "janebbshower2023.appspot.com",
  messagingSenderId: "360772870914",
  appId: "1:360772870914:web:b2670d552366fd32a4581b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;