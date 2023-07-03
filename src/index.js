import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
