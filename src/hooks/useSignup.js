import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// firebase
import { auth, db } from '@/utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, onSnapshot, setDoc, collection, query, where } from 'firebase/firestore';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = (account, email, password) => {
    setError(null);
    setWaiting(true);

    const ref = collection(db, 'itemList');
    const q = query(ref, where('account', '==', account));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let accountArr = [];
      querySnapshot.forEach((doc) => {
        accountArr.push({ ...doc.data() });
      });
      if (accountArr[0]) {
        setError('此帳號已註冊');
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((currentUser) => {
            dispatch({ type: 'LOGIN', payload: currentUser.user.uid });
            setDoc(doc(db, 'itemList', currentUser.user.uid), {
              profile: profile,
              item: [],
              showColor: showColor,
            });
          })
          .catch((error) => {
            switch (error.code) {
              case 'auth/email-already-in-use':
                setError('帳號已存在');
                break;
              case 'auth/invalid-email':
                setError('Email格式有誤');
                break;
              case 'auth/weak-password':
                setError('密碼至少6個字元');
                break;
              default:
            }
            setWaiting(false);
          });
      }
    });
  };
  return { error, signup, waiting };
};
