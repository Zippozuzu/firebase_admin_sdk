//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//const { initializeApp } = require('@firebase/app');
var firebase = require('firebase/auth');

const auth = getAuth();
const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyBXOfhszZDo08SC73P0ush8LXExSAvVjSw",
  authDomain: "testauth-59def.firebaseapp.com",
  databaseURL: "https://testauth-59def-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testauth-59def",
  storageBucket: "testauth-59def.appspot.com",
  messagingSenderId: "969543240926",
  appId: "1:969543240926:web:b5c4ee7cd3fc90baa2c64f"
  };
  

const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}