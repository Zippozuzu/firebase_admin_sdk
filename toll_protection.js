var admin = require('firebase-admin');
import { initializeRecaptchaConfig } from '@firebase/auth';

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// Initialize Firebase Authentication
const auth = getAuth();
initializeRecaptchaConfig(auth)
  .then(() => {
    console.log("Recaptcha Enterprise Config Initialization successful.")
  })
  .catch((error) => {
    console.error("Recaptcha Enterprise Config Initialization failed with " + error)
  });
  
  // Update the reCAPTCHA config to enable toll fraud protection
  const updateProjectConfigRequest = {
    recaptchaConfig: {
      phoneEnforcementState: 'ENFORCE',
      useSmsTollFraudProtection: 'true',
      tollFraudManagedRules: [{ startScore: 0.5,
        action: 'BLOCK' }],
    }
  }


admin.auth().projectConfigManager().updateProjectConfig(updateProjectConfigRequest);