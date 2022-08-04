// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw3PE-T_i-PuFZnx7aOR_rCJufOKi1A2A",
  authDomain: "petscovereage.firebaseapp.com",
  projectId: "petscovereage",
  storageBucket: "petscovereage.appspot.com",
  messagingSenderId: "963051779952",
  appId: "1:963051779952:web:92563add11aff11f0081b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
