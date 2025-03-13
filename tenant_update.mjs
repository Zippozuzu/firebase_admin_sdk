import { getAuth } from 'firebase-admin/auth';
import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

const serviceAccount = JSON.parse(
  await readFile(new URL('/Users/musiiko/code/adminSDK/adminSDK/admin.json', import.meta.url))
);


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  


// Update project config with password policy config
getAuth().tenantManager().createTenant({
  displayName: "TestTaras",
  passwordPolicyConfig: {
    enforcementState: 'ENFORCE',
    forceUpgradeOnSignin: true,
    constraints: {
      requireUppercase: true,
      requireLowercase: true,
      requireNonAlphanumeric: true,
      requireNumeric: true,
      minLength: 8,
      maxLength: 8,
    },
  },
})