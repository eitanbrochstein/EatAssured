import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_OAnbHinS2YBlulomuQpj9Jia5uOYvW4",
    authDomain: "eatassured-50fbd.firebaseapp.com",
    projectId: "eatassured-50fbd",
    storageBucket: "eatassured-50fbd.firebasestorage.app",
    messagingSenderId: "143193664243",
    appId: "1:143193664243:web:8d8ef44e1f08cbec6fa586",
    measurementId: "G-DFLGHZQKRS"
}, "eatassured");

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;