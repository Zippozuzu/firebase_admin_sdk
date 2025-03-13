var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})


const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  admin.auth()
  .getUsers([
    { uid: 'KgEtmD7GRHWpm7gWumKD9F5fUQl1' }

  ])
  .then((getUsersResult) => {
    console.log('Successfully fetched user data:');
    getUsersResult.users.forEach((userRecord) => {
      console.log(userRecord);
    });

    console.log('Unable to find users corresponding to these identifiers:');
    getUsersResult.notFound.forEach((userIdentifier) => {
      console.log(userIdentifier);
    });
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
};
// Start listing users from the beginning, 1000 at a time.
listAllUsers();