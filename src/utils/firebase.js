import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcjc_s1ihIt48aHBR8db_62oP7tbOvXIk",
    authDomain: "edmtemp-24eae.firebaseapp.com",
    projectId: "edmtemp-24eae",
    storageBucket: "edmtemp-24eae.appspot.com",
    messagingSenderId: "977931864192",
    appId: "1:977931864192:web:112b266c5229ab4bc7be65"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

// async function getUsers(db) {
//     const citiesCol = collection(db, 'users');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }