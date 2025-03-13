var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  

// const tenantId = 'TestTaras-j2sue'
const tenantId = 'adminsdk-2f2dc'



function listAllTenants(nextPageToken) {
  return admin.auth().tenantManager().listTenants(100, nextPageToken)
    .then((result) => {
      result.tenants.forEach((tenant) => {
        console.log(tenant.toJSON());
      });
      if (result.pageToken) {
        return listAllTenants(result.pageToken);
      }
    });
}

listAllTenants();