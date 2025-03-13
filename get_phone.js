var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


admin.auth()
  .getUserByPhoneNumber("+923157148892")
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('User info: ', userRecord.toJSON());
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });