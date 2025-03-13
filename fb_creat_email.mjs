import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, inMemoryPersistence, validatePassword } from "firebase/auth";


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

const email = 'test11@gmail.com';
const password = '121212';
auth.tenantId = 'TestTaras-j2sue';
auth.setPersistence(inMemoryPersistence)

const status = await validatePassword(auth, 'password').catch((error) => {
  // Password could not be validated.
});
const policy = status.passwordPolicy;


for (let i = 0; i < 1; i++) {

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user.providerData)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ..
  });

  }

