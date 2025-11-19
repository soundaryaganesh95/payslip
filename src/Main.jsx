// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 Must be imported
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 Must wrap <App /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);