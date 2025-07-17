// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ⬅️ Added Footer import
import OurProducts from './components/OurProducts';
import YourCart from './components/YourCart';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 pt-20 flex flex-col justify-between">
          <Navbar />

          {/* Main Page Content */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<OurProducts />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/your-cart" element={<YourCart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          {/* Footer stays at bottom */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
