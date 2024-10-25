// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDR_-FpA95ERINbO7k7p1Kr4cWcdo6sd8I",
    authDomain: "curd-storage.firebaseapp.com",
    projectId: "curd-storage",
    storageBucket: "curd-storage.appspot.com",
    messagingSenderId: "97402213248",
    appId: "1:97402213248:web:bf5cbe200f1b6178f72765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };