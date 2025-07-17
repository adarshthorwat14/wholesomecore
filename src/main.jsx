// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // ✅ import your CartProvider
import './index.css'; // or your global CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* ✅ Wrap App here */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
