const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

initializeApp({
    credential: cert(serviceAccount) 
});

const image_path =  "test.jpeg"
bucket_name = 'adminsdk-2f2dc.appspot.com'

async function SignedUrl() {
    try {
        // Reference to the file in the bucket
        const file = getStorage().bucket(bucket_name).file(image_path);
        // Generate a signed URL for the file
        const [url] = await file.getSignedUrl({
            action: 'read', 
            expires: '12-15-2024', // Expiration date for the signed URL
        });
        console.log('Signed URL:', url);

        return url; 
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

SignedUrl()
