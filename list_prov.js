var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


  admin
    .auth()
    .listProviderConfigs({ type })
    .then(results => res.json(results))    .catch(error => res.status(500).json(error));
