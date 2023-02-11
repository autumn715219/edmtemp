import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCJv9lG0n6BW6LVOluWl9zWP9S8rSJIKLg",
  authDomain: "edmtemp-v2.firebaseapp.com",
  projectId: "edmtemp-v2",
  storageBucket: "edmtemp-v2.appspot.com",
  messagingSenderId: "675188170839",
  appId: "1:675188170839:web:4c3506fe589fd108bac312"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()

export { db, auth, storage, provider };