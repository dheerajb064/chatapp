import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBhUEmyw2smnx3ftIeXVdq0y4m7K0jkI-4",
    authDomain: "chatapp-b8543.firebaseapp.com",
    projectId: "chatapp-b8543",
    storageBucket: "chatapp-b8543.appspot.com",
    messagingSenderId: "483038491128",
    appId: "1:483038491128:web:84ba9c67da354eb03a260d"
}).auth()