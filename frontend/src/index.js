import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store'
import { Provider } from 'react-redux';
import { EditionContext } from './Components/Context API/EditionContext';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "https://rbac-backend-dfna.onrender.com";
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <EditionContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EditionContext>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

