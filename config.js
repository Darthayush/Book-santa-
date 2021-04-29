import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCMuVHB3uz85bqlO3AG51gIK18XiWxuwRM",
    authDomain: "book-santa-5f025.firebaseapp.com",
    projectId: "book-santa-5f025",
    storageBucket: "book-santa-5f025.appspot.com",
    messagingSenderId: "1092625774694",
    appId: "1:1092625774694:web:6d0f611a23a25c8f01d5a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();