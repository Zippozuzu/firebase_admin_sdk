var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
const listAllUsers = (nextPageToken) => {
  // List batch of users, 100 at a time.
  admin.auth()
    .listUsers(100, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        
        admin.auth().deleteUser(userRecord.uid).then(() => {
          console.log('deleted', userRecord.uid);
        }).catch((e) => {
          console.log('Can\'t delete', userRecord.uid, 'error: ', e);
        });
        //      uid = userRecord.uid; -> uid
        //      console.log(uid);
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
        pausecomp(10000);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
};
// Start listing users from the beginning, 1000 at a time.
listAllUsers();