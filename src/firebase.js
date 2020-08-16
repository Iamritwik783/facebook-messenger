import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBVaEtMeBNRAi38fpU5IFDu03RJLqV8o1w",
        authDomain: "face-messenger-clone.firebaseapp.com",
        databaseURL: "https://face-messenger-clone.firebaseio.com",
        projectId: "face-messenger-clone",
        storageBucket: "face-messenger-clone.appspot.com",
        messagingSenderId: "317014844912",
        appId: "1:317014844912:web:3c279fa24c429e51ae6935",
        measurementId: "G-KRZR0VTN9K"
      }
);

const db = firebaseApp.firestore();

export default db;
