var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// Import the Firestore library

const { getFirestore } = require('firebase-admin/firestore');

// Initialize Firestore

const db = getFirestore();

// Get a reference to the document
const docRef = db.collection('taras').doc('bAEnXCupjscOmzEWF3i1');

// Retrieve the document snapshot
docRef.get()
  .then(doc => {
    // Check if the document exists
    if (doc.exists) {
      // Get the metadata
      const metadata = doc.metadata;
      // Check if the document has pending writes
      if (metadata.hasPendingWrites) {
        console.log('Document has local modifications');
      } else {
        console.log('Document is synchronized with the server');
      }
      // Check if the document was retrieved from the cache
      if (metadata.fromCache) {
        console.log('Document was retrieved from the cache');
      } else {
        console.log('Document was retrieved from the server');
      }
    } else {
      console.log('No such document!');
    }
  })
  .catch(error => {
    console.error('Error getting document:', error);
  });