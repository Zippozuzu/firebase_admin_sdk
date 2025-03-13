var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  

auth.tenantId =  'TestTaras-j2sue'
const password = '123123'
const user = 'firebasetaras@gmail.com'


auth.signInWithEmailAndPassword(user, password)
  .then((userCredential) => {
    return userCredential.user.getIdToken();
  })
  .then((idToken) => {
    // Send the ID token to server for verification. ID token should be scoped to TENANT-ID.
  });

  