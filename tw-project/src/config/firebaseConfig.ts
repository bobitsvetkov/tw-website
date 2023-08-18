// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_Mo01efWN0n1wwN_2wqhQrgL1kZZIA0A",
    authDomain: "twls-b9714.firebaseapp.com",
    projectId: "twls-b9714",
    storageBucket: "twls-b9714.appspot.com",
    messagingSenderId: "442097461838",
    appId: "1:442097461838:web:29c4be7c695b1eb031f11f",
    measurementId: "G-7YLH6P466W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);