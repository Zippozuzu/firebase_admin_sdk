var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  
var uid = 'T8UoNYtlkQbSnFUCKk7cCqKuduz2';


admin.auth()
  .getUser(uid)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('User info: ', userRecord.toJSON());
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });