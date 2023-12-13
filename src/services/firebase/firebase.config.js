// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUowLZznVH8nuPqOlVS2_vIjBgfxkncEI",
    authDomain: "pomodoro-e9671.firebaseapp.com",
    projectId: "pomodoro-e9671",
    storageBucket: "pomodoro-e9671.appspot.com",
    messagingSenderId: "1079511782119",
    appId: "1:1079511782119:web:ef437136d30d691eb98842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;