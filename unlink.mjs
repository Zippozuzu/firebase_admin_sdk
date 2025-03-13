import { initializeApp } from "firebase/app";
import { getAuth, updateEmail, signInWithEmailAndPassword, verifyBeforeUpdateEmail, unlink } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT61AF7Kvm5CzVWwvpT-M70_3bvLk4w-g",
  authDomain: "adminsdk-2f2dc.firebaseapp.com",
  projectId: "adminsdk-2f2dc",
  storageBucket: "adminsdk-2f2dc",
  messagingSenderId: "301977008285",
  appId: "1:301977008285:web:8e8c7f2b88cf24ff037c74"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// User credentials
const email = 'taras.musiiko@gmail.com';
const password = '121212';
const providerId = 'google.com';

// Get Firebase auth instance
const auth = getAuth();

// Sign in with email and password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Successfully signed in
    const user = userCredential.user;
    console.log("User signed in:", user);

    unlink(auth.currentUser, providerId).then(() => {
      // Auth provider unlinked from account
      // ...
    }).catch((error) => {
      // An error happened
      // ...
    });
    
  })
  .then(() => {
    console.log("unlink");
  })
  .catch((error) => {
    // Handle errors during sign-in or email update
    console.error("Error:");
  });


unlink(auth.currentUser, providerId).then(() => {
  // Auth provider unlinked from account
  // ...
}).catch((error) => {
  // An error happened
  // ...
});

