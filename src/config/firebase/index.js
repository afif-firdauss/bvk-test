import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAGEOp0QJdfygA7LFTpo_YNGOGJRZ3J01E",
  authDomain: "simple-notes-firebase-94f0b.firebaseapp.com",
  databaseURL: "simple-notes-firebase-94f0b-default-rtdb.firebaseio.com",
  projectId: "simple-notes-firebase-94f0b",
  storageBucket: "simple-notes-firebase-94f0b.appspot.com",
  messagingSenderId: "994875465157",
  appId: "1:994875465157:web:c4642e4e00bd3fa8783fac",
  measurementId: "G-3GPWCWK7LD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;