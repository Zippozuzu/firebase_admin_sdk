const admin = require('firebase-admin');

// Initialize Firebase Admin SDK (if not already initialized)

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://adminsdk-2f2dc.appspot.com'
})

// Get reference to the bucket
const bucket = admin.storage().bucket();

async function listFiles() {
  try {
    // Get all files with a specific prefix (directory path)
    const [files] = await bucket.getFiles();

    // List the file names
    const fileNames = files.map(file => file.name);
    console.log('Files:', fileNames);
    return fileNames;
  } catch (error) {
    console.error('Error listing files:', error.message);
  }
}

// Call the function to list files
listFiles();

