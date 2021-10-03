import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDg5eVAD_n2UZ1zFGpP2j9swOw9I7UIbL0",
    authDomain: "sql-demos-4b6a7.firebaseapp.com",
    projectId: "sql-demos-4b6a7",
    storageBucket: "sql-demos-4b6a7.appspot.com",
    messagingSenderId: "87515480384",
    appId: "1:87515480384:web:3e1b9dc9eca5a16a16faa5",
    measurementId: "G-6FFSXQBR9V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


