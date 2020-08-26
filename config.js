import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDpILbNfk4MUYH896pdyTo7pSOYlfio1ZQ",
  authDomain: "willy-app-a73a9.firebaseapp.com",
  databaseURL: "https://willy-app-a73a9.firebaseio.com",
  projectId: "willy-app-a73a9",
  storageBucket: "willy-app-a73a9.appspot.com",
  messagingSenderId: "269293694746",
  appId: "1:269293694746:web:3b0ef553369d534064c6a3"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
