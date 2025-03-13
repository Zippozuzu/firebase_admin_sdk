var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://extention-e7b4e-default-rtdb.firebaseio.com'
  });

const db = admin.firestore();
const usersRef = db.collection('users');


  const user = {
    uid: 'user123',
    name: 'John Doe',
    email: 'user@example.com',
    photoURL: 'https://example.com/profile.jpg'
  };

  usersRef.doc(user.uid).set(user)
  .then(() => {
    console.log('User document added successfully.');
  })
  .catch(error => {
    console.error('Error adding user document:', error);
  });


