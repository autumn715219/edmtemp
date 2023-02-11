import React, { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, provider } from '@/utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import LandingHeader from '@/components/header';

// import styled from 'styled-components/macro';
import '@/styles/login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setisRegistering] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [registerInformation, setRegisterInformation] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard');
      }
    });
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setisRegistering(true);
      navigate('/');
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert('確認信箱輸入有誤');
      return;
    } else if (registerInformation.password !== registerInformation.confirmPassword) {
      alert('確認密碼輸入錯誤');
      return;
    }
    createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setErrMsg('信箱已存在');
            break;
          default:
        }
      });
  };
  return (
    <>
      <LandingHeader />
      <div className='login-wrap'>
        <div className='login-container'>
          <div className='login-register-container'>
            {isRegistering ? (
              <>
                <h2 className='login-title'>註冊帳號</h2>
                <input
                  type='email'
                  placeholder='請輸入信箱'
                  value={registerInformation.email}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type='email'
                  placeholder='再次確認信箱'
                  value={registerInformation.confirmEmail}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      confirmEmail: e.target.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='請輸入密碼'
                  value={registerInformation.password}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      password: e.target.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='再次確認密碼'
                  value={registerInformation.confirmPassword}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button onClick={handleRegister}>註冊</button>
                <a
                  className='login-notice'
                  href='javascript:void(0)'
                  onClick={() => setisRegistering(false)}
                >
                  已經有帳號了，請登入
                </a>
              </>
            ) : (
              <>
                <h2 className='login-title'>登入帳號</h2>
                <input
                  type='email'
                  placeholder='請輸入信箱'
                  onChange={handleEmailChange}
                  value={email}
                />
                <input
                  type='password'
                  placeholder='請輸入密碼'
                  onChange={handlePasswordChange}
                  value={password}
                />
                <button onClick={handleSignIn}>登入</button>
                <a
                  className='login-notice'
                  href='javascript:void(0)'
                  onClick={() => setisRegistering(true)}
                >
                  我還沒有帳號，註冊新帳戶
                </a>
              </>
            )}
            <hr
              style={{
                margin: '10px 0 15px 0',
                width: '90%',
                borderWidth: '1px 0 0 0 ',
                borderColor: '#000',
                opacity: '0.2',
              }}
            />
            <h3></h3>
            <button type='button' className='login-with-google-btn' onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
