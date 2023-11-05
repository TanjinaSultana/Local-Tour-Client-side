// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmXUuMHVNoQkhZ69g2ovVBvXgBfH02Gt4",
  authDomain: "service-client-side.firebaseapp.com",
  projectId: "service-client-side",
  storageBucket: "service-client-side.appspot.com",
  messagingSenderId: "127731336395",
  appId: "1:127731336395:web:10ce3865137c3ccf80c74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;