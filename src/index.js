import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './dashboard/LandingPage';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Component1 from './dashboard/Component1';
import Component2 from './dashboard/Component2';
import LoginPage from './dashboard/LoginPage';
import { Provider } from 'react-redux';
import { myStore } from './dashboard/redux/store';
import Component3 from './dashboard/Component3';
import MyStore from './dashboard/MyStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={< LoginPage />} />
          <Route path='/' element={<LandingPage />}>
            <Route path='' element={<Component1 />} />
            <Route path='component2' element={<Component2 />} />
            <Route path='component3' element={<Component3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);