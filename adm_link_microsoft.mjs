import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration object (replace with your Firebase project's config)
const firebaseConfig = {
    apiKey: "AIzaSyDT61AF7Kvm5CzVWwvpT-M70_3bvLk4w-g",
    authDomain: "adminsdk-2f2dc.firebaseapp.com",
    projectId: "adminsdk-2f2dc",
    storageBucket: "adminsdk-2f2dc.appspot.com",
    messagingSenderId: "301977008285",
    appId: "1:301977008285:web:8e8c7f2b88cf24ff037c74"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

var existingEmail = "user@example.com";
var password = "userPassword";

// Sign in with email and password
firebase.auth().signInWithEmailAndPassword(existingEmail, password).then(function(userCredential) {
    var currentUser = userCredential.user;

    // Now, link with Microsoft provider
    var microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');

    currentUser.linkWithPopup(microsoftProvider).then(function(result) {
        console.log("Microsoft account successfully linked to the existing account.");
    }).catch(function(error) {
        console.error("Error linking Microsoft account: ", error);
    });
}).catch(function(error) {
    console.error("Error signing in with email: ", error);
});


