var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  
// var email = 'f1irebаsetaras2@gmail.com';

admin.auth()
    .getUserByEmail("firebasetaras@gmail.com",

    )
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully updated user', userRecord.toJSON());
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });

    