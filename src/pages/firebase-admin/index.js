import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
   admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://terakoya-39cec-default-rtdb.firebaseio.com"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin;