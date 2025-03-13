var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})


const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  admin.auth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log(userRecord.email, userRecord);
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