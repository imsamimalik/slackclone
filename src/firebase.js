import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7ddjuDHH_DqV9Hu6oNkUF0v4jreNQ4DI",
    authDomain: "imslack.firebaseapp.com",
    projectId: "imslack",
    storageBucket: "imslack.appspot.com",
    messagingSenderId: "80175356487",
    appId: "1:80175356487:web:25ec9bca5e57055048af62",
    measurementId: "G-5CDRS8LRCK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initilizing the app (connects to the google backend)

//setting up the db

// firebase is a no-sql
const db = firebaseApp.firestore(); //this is for accessing the database

const auth = firebaseApp.auth();

//this is for the provider for the google authentication (popup)
const provider = new firebase.auth.GoogleAuthProvider();

// exporting the different elements to have access to them from anywhere
export { db, auth, provider };
