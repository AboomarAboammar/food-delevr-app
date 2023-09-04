// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDETMLdUxCP6XtWfLCDro3sOzMsgz8cwi8",
  authDomain: "ordering-food-d0f35.firebaseapp.com",
  projectId: "ordering-food-d0f35",
  storageBucket: "ordering-food-d0f35.appspot.com",
  messagingSenderId: "867242214252",
  appId: "1:867242214252:web:9c9e96e549ee67d01d2949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app