import { initializeApp } from "firebase/app";
import { getAuth, applyActionCode } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDT61AF7Kvm5CzVWwvpT-M70_3bvLk4w-g",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get actionCode from CLI arguments (instead of query parameters)
const actionCode = process.argv[2]; // Read from command-line arguments
const continueUrl = "https://test-taras.testing-frbs-ss.com";
const lang = "en";

if (!actionCode) {
  console.error("❌ Missing actionCode! Run the script as:");
  console.error("   node verifyEmail.js <oobCode>");
  process.exit(1);
}

// Function to verify email
async function handleVerifyEmail(auth, actionCode, continueUrl, lang) {
  try {
    await applyActionCode(auth, actionCode);
    console.log("✅ Email verified successfully!");

    console.log(`Redirecting to: ${continueUrl}`);
  } catch (error) {
    console.error("❌ Error verifying email:", error.message);
  }
}

// Run the function
handleVerifyEmail(auth, actionCode, continueUrl, lang);


