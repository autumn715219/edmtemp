import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onSnapshot, doc } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setWaiting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        dispatch({ type: 'LOGIN', payload: currentUser.user.uid });
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            setError("User isn't found");
            break;
          case 'auth/wrong-password':
            setError('Email or Password is wrong');
            break;
          default:
        }
        setWaiting(false);
      });
  };
  return { login, error, waiting };
};
