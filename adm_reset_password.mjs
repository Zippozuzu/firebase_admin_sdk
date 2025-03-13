
import { listAllUsers } from 'firebase-admin/app';
import { initializeApp } from 'firebase/app';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

var serviceAccount = require('/Users/musiiko/code/admin.json');


const firebaseConfig = {
  apiKey: "AIzaSyBXOfhszZDo08SC73P0ush8LXExSAvVjSw",
  authDomain: "testauth-59def.firebaseapp.com",
  databaseURL: "https://testauth-59def-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testauth-59def",
  storageBucket: "testauth-59def.appspot.com",
  messagingSenderId: "969543240926",
  appId: "1:969543240926:web:b5c4ee7cd3fc90baa2c64f"
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
  

initializeApp(firebaseConfig);

const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  admin.auth()
    .listUsers(100, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        
        sendPasswordResetEmail(auth, userRecord.email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        //      uid = userRecord.uid; -> uid
        //      console.log(uid);
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
};
// Start listing users from the beginning, 1000 at a time.
listAllUsers();