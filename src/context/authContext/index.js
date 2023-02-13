import React, { useReducer, createContext, useEffect } from 'react';

// firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase';

const initState = {
  user: null,
  isLogin: false,
};

// create a global context object
export const AuthContext = createContext();

// create reducer function
export const reducer = (state, action) => {
  // create action
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'CHECK_LOGIN':
      return { user: action.payload, isLogin: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // useReducer for managing states
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: 'CHECK_LOGIN', payload: user.uid });
      } else {
        dispatch({ type: 'CHECK_LOGIN', payload: user });
      }
    });
  }, []);

  // use value property from provider to share state and dispatch function
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
