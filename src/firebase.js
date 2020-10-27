import firebase from "firebase";

const firebaeApp = firebase.initializeApp({
    apiKey: "AIzaSyAtzZM1RWPw2p8YgYtLZVRqhapax9iZirM",
    authDomain: "inklink-8d244.firebaseapp.com",
    databaseURL: "https://inklink-8d244.firebaseio.com",
    projectId: "inklink-8d244",
    storageBucket: "inklink-8d244.appspot.com",
    messagingSenderId: "1058972311315",
    appId: "1:1058972311315:web:22e36202b6625cb04904e6",
    measurementId: "G-CCLV71KDTV"
});

const db = firebaeApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

