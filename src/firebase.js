// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHNRvyJxKDaJHXq0xexxtzOVhxWAdOiBU",
    authDomain: "linkedin-clone-254d6.firebaseapp.com",
    projectId: "linkedin-clone-254d6",
    storageBucket: "linkedin-clone-254d6.appspot.com",
    messagingSenderId: "204807447145",
    appId: "1:204807447145:web:4111ab1f850443f025f8f8",
    measurementId: "G-J6C4VD5HBB"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
