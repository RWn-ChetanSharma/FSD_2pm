import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJqx0S3Qk8u-wewqeXvRkbX-4fQVDsKR0",
  authDomain: "mybook-app-ba831.firebaseapp.com",
  databaseURL: "https://mybook-app-ba831-default-rtdb.firebaseio.com",
  projectId: "mybook-app-ba831",
  storageBucket: "mybook-app-ba831.appspot.com",
  messagingSenderId: "66142709012",
  appId: "1:66142709012:web:ba1ba8229fccc9dca7ce01"
};

export const app = initializeApp(firebaseConfig);
