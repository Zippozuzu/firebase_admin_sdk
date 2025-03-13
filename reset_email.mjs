import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail  } from "firebase/auth";


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

const email = 'firebasetaras@gmail.com';

sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
