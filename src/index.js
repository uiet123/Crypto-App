import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CoinContextProvider from './context/CoinContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoinContextProvider>
    <App />
    </CoinContextProvider>
  </React.StrictMode>
);

