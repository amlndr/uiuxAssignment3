import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




const config = {
    apiKey: "AIzaSyBFNkVp1w1pxVnCsk0OjKn9HpEAGSpALW8",
    authDomain: "donatebook-fe70e.firebaseapp.com",
    projectId: "donatebook-fe70e",
    storageBucket: "donatebook-fe70e.appspot.com",
    messagingSenderId: "1060439281628",
    appId: "1:1060439281628:web:6475ad4231c1dab8ad4919",
    measurementId: "G-JE3T44MY6F"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;