import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import useUserAuth from '@/hooks/useUserAuth';

import Dashboard from './pages/dashboard';
import Edit from './pages/edit';
import Landing from './pages/landing';
import Publish from './pages/publish';

import { ConfigProvider } from 'antd';
import './styles/global.scss';

export default function App() {
  const { currentUser } = useUserAuth();

  const theme = {
    token: {
      colorPrimary: '#ff7c5a',
    },
  };

  return (
    <>
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navigate to='home' />} />
              <Route path='/home' element={<Landing />} />
              <Route
                path='/dashboard'
                element={currentUser ? <Dashboard /> : <Navigate to='/home' />}
              />
              <Route path='/edit' element={currentUser ? <Edit /> : <Navigate to='home' />} />
              <Route path='/:userId/:appId' element={<Publish />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
    </>
  );
}
