import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Firebase configuration object (replace with your Firebase project's config)
const firebaseConfig = {
    apiKey: "AIzaSyDT61AF7Kvm5CzVWwvpT-M70_3bvLk4w-g",
    authDomain: "adminsdk-2f2dc.firebaseapp.com",
    projectId: "adminsdk-2f2dc",
    storageBucket: "adminsdk-2f2dc.appspot.com",
    messagingSenderId: "301977008285",
    appId: "1:301977008285:web:8e8c7f2b88cf24ff037c74"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

const email = "test.taras@gmail.com";
const password = '121212';
auth.languageCode = 'ar';

// Sign in with email and password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const querySnapshot = getDocs(collection(db, "groups"));
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
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





