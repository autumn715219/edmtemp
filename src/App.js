import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import Dashboard from './pages/dashboard';
import Edit from './pages/edit';
import Landing from './pages/landing';
import { ConfigProvider } from 'antd';

export default function App() {
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
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/edit' element={<Edit />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
    </>
  );
}
