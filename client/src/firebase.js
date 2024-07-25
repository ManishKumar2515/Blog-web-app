// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blog-app-2c8ed.firebaseapp.com',
  projectId: "blog-app-2c8ed",
  storageBucket: "blog-app-2c8ed.appspot.com",
  messagingSenderId: "235609121180",
  appId: "1:235609121180:web:b71ec8eb31c01b409ee859",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);