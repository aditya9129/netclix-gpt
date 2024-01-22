// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXX9YgxK8X8BbGTpwqVA8JO634--sFYwA",
  authDomain: "netflixgpt-812f6.firebaseapp.com",
  projectId: "netflixgpt-812f6",
  storageBucket: "netflixgpt-812f6.appspot.com",
  messagingSenderId: "410914625421",
  appId: "1:410914625421:web:92ce4635b3cea158854fc4",
  measurementId: "G-9RWRH31LSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
export default auth;