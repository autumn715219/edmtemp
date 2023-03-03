import React, { useState, useEffect, useCallback } from 'react';
import { createActions } from 'redux-actions';
import { auth, provider, db } from '@/utils/firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, addDoc, onSnapshot, setDoc, collection, query, where } from 'firebase/firestore';

import { message } from 'antd';

const { userAuth } = createActions({
  'USER_AUTH/LOGIN_REQUEST': () => [],
  'USER_AUTH/LOGIN_SUCCESS': (user) => ({ user }),
  'USER_AUTH/LOGIN_FAILURE': (error) => ({ error }),
  'USER_AUTH/LOGOUT': () => [],
});

const { loginRequest, loginSuccess, loginFailure, logout } = userAuth;

const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  await signInWithEmailAndPassword(auth, email, password)
    .then((currentUser) => {
      dispatch(loginSuccess(currentUser.user.uid));
      return message.info('成功登入');
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/user-not-found':
          dispatch(loginFailure('User isn\'t found'));
          return message.error('找不到此Email');

        case 'auth/wrong-password':
          dispatch(loginFailure('Email or Password is wrong'));
          return message.error('帳號或密碼錯誤');

        default:
      }
    });
};

const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(logout());
};

const signInWithGoogle = () => async (dispatch) => {
  dispatch(loginRequest());
  await signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem('isAuth', true);
    try {
      const dataRef = doc(db, `users/${result.user.uid}`);
      setDoc(dataRef, {
        username: result.user.displayName,
        email: result.user.email,
      });
      console.log('Document written with ID: ', dataRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    dispatch(loginSuccess(result.user.uid));
    return message.success('成功登入');
  });
};

const signUpUser = (registerInformation) => async (dispatch) => {
  await createUserWithEmailAndPassword(
    auth,
    registerInformation.email,
    registerInformation.password,
  )
    .then((currentUser) => {
      try {
        const dataRef = doc(db, `users/${currentUser.user.uid}`);
        setDoc(dataRef, {
          username: registerInformation.username,
          email: registerInformation.email,
        });
        console.log('Document written with ID: ', dataRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      dispatch(loginRequest());
      dispatch(loginUser(registerInformation.email, registerInformation.password));
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          dispatch(loginFailure('email-already-in-use'));
          return message.error('信箱已存在');
        case 'auth/invalid-email':
          dispatch(loginFailure('invalid-email'));
          return message.error('信箱格式有誤');
        case 'auth/weak-password':
          dispatch(loginFailure('weak-password'));
          return message.error('密碼至少6個字元');
        default:
      }
    });
};

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  loginUser,
  logoutUser,
  signInWithGoogle,
  signUpUser,
};
