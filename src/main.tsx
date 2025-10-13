import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import App from './App';
import './index.css';

// Initialize EmailJS with your public key
emailjs.init('lLH6--0YXEhBlso6i');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
