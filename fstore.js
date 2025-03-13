import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import fs from 'fs';
import { Blob } from 'buffer';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxGDKatrmxnhw3_CayPwFSgmXbJ9mfDaI",
    authDomain: "adminsdk-2f2dc.firebaseapp.com",
    projectId: "adminsdk-2f2dc",
    storageBucket: "adminsdk-2f2dc.appspot.com",
    messagingSenderId: "301977008285",
    appId: "1:301977008285:web:14a95911083f65fc037c74"
};


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

// Read the file and create a Blob with a custom name
const filePath = './test.png';
const fileName = 'test.png'; // Specify the file name
const fileData = fs.readFileSync(filePath);
const processedImageFile = new Blob([fileData], { type: 'image/png' });

async function uploadProcessedImage(userId, file, fileName) {
    const storageRef = ref(storage, `users/${userId}/processed_images/${fileName}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    console.log('Processed image uploaded successfully:', url);
    return url;
}

async function storeImageMetadata(userId, imageUrl, imageName) {
    const imageRef = doc(db, 'users', userId, 'images', imageName);
    await setDoc(imageRef, {
        url: imageUrl,
        name: imageName,
        timestamp: new Date().toISOString(),
    });
    console.log('Image metadata stored successfully');
}

async function handleProcessingComplete(userId, processedImageFile, fileName) {
    try {
        const imageUrl = await uploadProcessedImage(userId, processedImageFile, fileName);
        await storeImageMetadata(userId, imageUrl, fileName);
        console.log('Processed image and metadata stored successfully');
    } catch (error) {
        console.error('Error storing processed image:', error);
    }
}

// Call the function with the user ID, file, and file name
handleProcessingComplete("e8VCFmkwJTZoyF9NXFqjXMyo3Ti1", processedImageFile, fileName);
