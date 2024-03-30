// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg1RcLP9mHxh1qeL5Lp8SlE_ufDsvmVDA",
    authDomain: "user-email-password-auth-68c17.firebaseapp.com",
    projectId: "user-email-password-auth-68c17",
    storageBucket: "user-email-password-auth-68c17.appspot.com",
    messagingSenderId: "552395054913",
    appId: "1:552395054913:web:da4a3c844913d260488bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);