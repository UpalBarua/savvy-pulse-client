import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { AuthProvider } from './contexts/AuthContext';
import './assets/index.css';
import './assets/utilities.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
