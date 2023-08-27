import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2guVgzNhp6CESATWPL6xgafEIUKH2YSA",
  authDomain: "terakoya-39cec.firebaseapp.com",
  projectId: "terakoya-39cec",
  databaseURL: "https://terakoya-39cec-default-rtdb.firebaseio.com/",
  storageBucket: "terakoya-39cec.appspot.com",
  messagingSenderId: "378705423839",
  appId: "1:378705423839:web:de5896279495692076a86a",
  measurementId: "G-QBMCQZV7G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const auth = getAuth(app);

export { app, auth, firestore };