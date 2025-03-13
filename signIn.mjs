import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT61AF7Kvm5CzVWwvpT-M70_3bvLk4w-g",
  authDomain: "adminsdk-2f2dc.firebaseapp.com",
  databaseURL: "https://adminsdk-2f2dc-default-rtdb.firebaseio.com",
  projectId: "adminsdk-2f2dc",
  storageBucket: "adminsdk-2f2dc.appspot.com",
  messagingSenderId: "301977008285",
  appId: "1:301977008285:web:8e8c7f2b88cf24ff037c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('APP INITIALIZED');

const auth = getAuth(app);
const db = getFirestore(app);

// User credentials
const email = 'test.taras@gmail.com';
const password = '121212';

// Sign in with email and password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User signed in:", user.uid);

    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("onAuthStateChanged - User is signed in:", user.uid);

        // Добавляем задержку перед запросом к Firestore (ждем токен)
        setTimeout(async () => {
          try {
            console.log("Fetching Firestore data...");
            const groupsCol = collection(db, "groups");
            const groupSnapshot = await getDocs(groupsCol);

            if (groupSnapshot.empty) {
              console.log("No groups found.");
            } else {
              groupSnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
              });
            }
          } catch (error) {
            console.error("Firestore error:", error);
          }
        }, 1000); // Ждем 1 секунду
      } else {
        console.log("User is signed out");
      }
    });
  })
  .catch((error) => {
    console.error("Auth error:", error.code, error.message);
  });




