// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3UYqCR2PMQ54IwAIUq675sGyzTqsQ5ZQ",
    authDomain: "portfolio-877b2.firebaseapp.com",
    projectId: "portfolio-877b2",
    storageBucket: "portfolio-877b2.appspot.com",
    messagingSenderId: "351524547828",
    appId: "1:351524547828:web:90a543af5f2763e04982a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth