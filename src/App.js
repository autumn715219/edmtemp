import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
// import styled from 'styled-components';
import Dashboard from './pages/dashboard';
import Edit from './pages/edit';

const Landing = lazy(() => import('./pages/landing/index'));
const Login = lazy(() => import('./pages/login/index'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// const Loading = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// function WaitingComponent(Component) {
//   return (
//     <Suspense fallback={<Loading>加载中...</Loading>}>
//       <Component />
//     </Suspense>
//   );
// }

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
