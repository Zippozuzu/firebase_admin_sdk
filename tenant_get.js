var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  

const tenantId = 'TestTaras-j2sue'



admin.auth().tenantManager().getTenant(tenantId)
  .then((tenant) => {
    
    console.log(JSON.stringify(tenant.toJSON(), null, 2));
  })
  .catch((error) => {
    // Handle error.
  });