import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/auth/LoginPage';
import './assets/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);
