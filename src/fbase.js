import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
  apiKey: "AIzaSyC3h-pppob_tLdLM5P8o9br2wjsalOGDJ8",
  authDomain: "jaram-website-team3.firebaseapp.com",
  projectId: "jaram-website-team3",
  storageBucket: "jaram-website-team3.appspot.com",
  messagingSenderId: "941195582503",
  appId: "1:941195582503:web:7c2370e8ffaafed5bc0202",
  measurementId: "G-W9ERY85KYG",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();