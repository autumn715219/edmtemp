import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAcjc_s1ihIt48aHBR8db_62oP7tbOvXIk',
  authDomain: 'edmtemp-24eae.firebaseapp.com',
  projectId: 'edmtemp-24eae',
  storageBucket: 'edmtemp-24eae.appspot.com',
  messagingSenderId: '977931864192',
  appId: '1:977931864192:web:112b266c5229ab4bc7be65',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
