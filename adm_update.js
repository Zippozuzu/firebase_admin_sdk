var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  
var uid = 'zridhQXjn1UQVpeUnlF0kWmHTMv2';

admin.auth()
    .updateUser(uid, {
      email: 'taras.musiiko@gmail.com',
      providerData: [ {
        uid: '105486636789859140810',
        displayName: 'Taras Ma',
        email: 'firebasetaras@gmail.com',
        photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocK2jmCQjgvSuGshRXEQjJKfprOSAJpQvH09Uf8LjqVoc85h6A=s96-c',
        providerId: 'google.com',
        phoneNumber: undefined
      }]

    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully updated user', userRecord.toJSON());
    })
    .catch((error) => {
      console.log('Error updating user:', error);
    });