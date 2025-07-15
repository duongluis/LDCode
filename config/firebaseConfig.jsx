// Import the functions you need from the SDKs you need
import { getAnalytics } from "@firebase/analytics";
import { initializeApp } from '@firebase/app';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLA2m7kC-0mLdof8YUalgxpRg49kM92vw',
  authDomain: "ldcode-main.firebaseapp.com",
  projectId: "ldcode-main",
  storageBucket: "ldcode-main.firebasestorage.app",
  messagingSenderId: "703284479903",
  appId: "1:703284479903:web:edf2f609db6b4edad55faa",
  measurementId: "G-L28Z6BPZQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
const analytics = getAnalytics(app);
