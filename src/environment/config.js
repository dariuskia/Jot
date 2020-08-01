import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBH7Lc83M_oMLOEgB9dUmeCUXAeIse4xhI",
    authDomain: "jot-app-80b8e.firebaseapp.com",
    databaseURL: "https://jot-app-80b8e.firebaseio.com",
    projectId: "jot-app-80b8e",
    storageBucket: "jot-app-80b8e.appspot.com",
    messagingSenderId: "24210504562",
    appId: "1:24210504562:web:4ddd56e4ad265bd1373beb",
    measurementId: "G-P3N1QDRXGJ"
};
// Initialize Firebase
const  app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()