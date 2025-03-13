import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

// Firebase configuration object (replace with your Firebase project's config)
const firebaseConfig = {
    apiKey: "AIzaSyDT61AF7Kvm5CzVWwvpT-M70_3bvLk4w-g",
    authDomain: "adminsdk-2f2dc.firebaseapp.com",
    projectId: "adminsdk-2f2dc",
    storageBucket: "adminsdk-2f2dc.appspot.com",
    messagingSenderId: "301977008285",
    appId: "1:301977008285:web:8e8c7f2b88cf24ff037c74"
};

initializeApp(firebaseConfig);

const auth = getAuth();

const email = "firebasetaras@gmail.com";
const password = '121212';
auth.languageCode = 'ar';

// Sign in with email and password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // Send email verification if the user is signed in
    return sendEmailVerification(user);
  })
  .then(() => {
    // Email verification sent!
    console.log("Verification email sent.");
  })
  .catch((error) => {
    // Handle errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error [${errorCode}]: ${errorMessage}`);
  });





