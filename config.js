import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBulXgckOalrV4SH4pAlxkGflYDW_LOxvY",
  authDomain: "complaint-forum-ba12c.firebaseapp.com",
  projectId: "complaint-forum-ba12c",
  storageBucket: "complaint-forum-ba12c.appspot.com",
  messagingSenderId: "371233839879",
  appId: "1:371233839879:web:1345094f0a26ce981603a2"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

