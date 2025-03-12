import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Jos haluat lisätä tyylejä

// Renderöidään App-komponentti div#rootiin, joka on määritelty index.html:ssä
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
