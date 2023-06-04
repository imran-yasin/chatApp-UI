// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMfRibwx4CjezUmkH1KG7Dvk7ioaLZqG0",
  authDomain: "mcchatface.firebaseapp.com",
  projectId: "mcchatface",
  storageBucket: "mcchatface.appspot.com",
  messagingSenderId: "950627290239",
  appId: "1:950627290239:web:ff86510d72cd1e4355434a",
  measurementId: "G-8GYMLJ7FFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const config = {
  apiKey: "AIzaSyBMfRibwx4CjezUmkH1KG7Dvk7ioaLZqG0",
  authDomain: "mcchatface.firebaseapp.com",
  //   databaseURL: "ADD-YOUR-DETAILS-HERE",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
