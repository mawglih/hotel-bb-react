import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyALhLREvxz-BG8tQ4ArRidfOrKIT3oxFCE",
    authDomain: "react-firebase-auth-84635.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-84635.firebaseio.com",
    projectId: "react-firebase-auth-84635",
    storageBucket: "react-firebase-auth-84635.appspot.com",
    messagingSenderId: "1087524999708"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.database();
  const storage = firebase.storage();
  const auth = firebase.auth();
  
  export {
    auth,
    db,
    storage,
    provider,
  };