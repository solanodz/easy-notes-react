// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIH5VmgyaxnuQijbss7i5w7-vqTehk9EU",
    authDomain: "easy-notes-e2d60.firebaseapp.com",
    databaseURL: "https://easy-notes-e2d60-default-rtdb.firebaseio.com",
    projectId: "easy-notes-e2d60",
    storageBucket: "easy-notes-e2d60.appspot.com",
    messagingSenderId: "598673059032",
    appId: "1:598673059032:web:f248c469ae656a53083bad",
    measurementId: "G-0PKJWGTY3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
