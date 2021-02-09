import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCaKb-ZJS0qrriIt-Xttkk2gVNFg-ypI_s",
    authDomain: "oddaj-rzecz-website.firebaseapp.com",
    projectId: "oddaj-rzecz-website",
    storageBucket: "oddaj-rzecz-website.appspot.com",
    messagingSenderId: "1001843154314",
    appId: "1:1001843154314:web:02afb0213aedc9e0653c73",
    measurementId: "G-9JN0H6NZC4"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };