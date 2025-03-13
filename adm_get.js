var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  
var uid = 'AprAzIXmpHNYMvlCCSKO74wUUzk2';

admin.auth()
    .getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(userRecord.toJSON())
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });