import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyCOcMT1RTQEGhjg4m7tF4805uigX-sgXo8",
    authDomain: "clone-yt-5e793.firebaseapp.com",
    projectId: "clone-yt-5e793",
    storageBucket: "clone-yt-5e793.appspot.com",
    messagingSenderId: "608054267763",
    appId: "1:608054267763:web:7eac07e648943703fa3f06",
    measurementId: "G-T1PGLDS95W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 


  export {db,auth,provider};