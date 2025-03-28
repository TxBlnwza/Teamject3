import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/App.css'; // ตรวจสอบว่า import ไฟล์ CSS นี้

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);