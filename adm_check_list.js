var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})


const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
admin.auth()
  .getUsers([
  ])
  .then((getUsersResult) => {
    getUsersResult.users.forEach((userRecord) => {
      console.log(userRecord.email, userRecord.uid);
    });
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
};

listAllUsers();
