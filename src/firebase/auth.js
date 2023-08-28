import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, firestore } from './config';

export function handleSignIn() {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      //The user's document ref
      const userRef = firestore.collection('users').doc(result.user.uid);

      //Checks if the user already exists
      userRef
        .get()
        .then((doc) => {
          if (doc.exists) return;

          //Sets up the user's collection in the database
          firestore
            .collection('users')
            .doc(result.user.uid)
            .set({
              dictionary: [], // No pledge yet
              savedArticles: [] //No Articles.jsx saved
            })
            .catch(console.error);
        })
        .catch(console.error);
    })
    .catch((error) => {
      if (error.code === 'auth/cancelled-popup-request') return; // User closed the popup
      console.error(error);
    });
}

export function handleSignOut() {
  auth.signOut().then(r => {});
}