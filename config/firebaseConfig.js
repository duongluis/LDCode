import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'ldcode-992002.firebaseapp.com',
  databaseURL: 'https://ldcode-992002.firebaseio.com',
  projectId: 'ldcode-992002',
//   storageBucket: 'ldcode-992002.firebasestorage.app',
  messagingSenderId: 'sender-id',
  appId: '1:1007476736760:android:6a5dc84434e378989c710d',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
