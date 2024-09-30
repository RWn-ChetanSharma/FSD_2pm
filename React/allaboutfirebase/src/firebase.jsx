import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE__AUTH_DOMAIN,
  projectId: process.env.REACT_FIREBASE__PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASE__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.REACT_FIREBASE__APP_ID,
  databaseURL: process.env.REACT_FIREBASE__DATABASE_URL,
};

export const app = initializeApp(firebaseConfig);
