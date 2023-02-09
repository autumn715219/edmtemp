import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
// import styled from 'styled-components';
import Home from './pages/home';
import Edit from './pages/edit';

// const Home = lazy(() => import('./pages/home/index'));
// const Edit = lazy(() => import('./pages/edit/index'));
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
            <Route path='/' element={<Home />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
