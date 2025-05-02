import ReactDOM from 'react-dom';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'aos/dist/aos.css';
import AOS from 'aos';
import { AuthProvider } from './context/AuthContext';

AOS.init();

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
