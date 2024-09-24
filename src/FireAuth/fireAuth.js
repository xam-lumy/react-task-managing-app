
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC8W-Q6UrxEF6EvYCmmBbaX58wUqacDeE",
  authDomain: "taskauthe.firebaseapp.com",
  projectId: "taskauthe",
  storageBucket: "taskauthe.appspot.com",
  messagingSenderId: "372901346272",
  appId: "1:372901346272:web:df62658dbaab6ef78f0985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()