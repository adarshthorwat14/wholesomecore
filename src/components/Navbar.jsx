// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate(); // <-- Add this

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    navigate('/your-cart'); // <-- Navigate to YourCart page
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        
        {/* Logo Section */}
        <div className={styles.logo}>
          <Heart className={styles.logoIcon} />
          <div className={styles.logoText}>
            <span className={styles.brandName}>Wholesomecore</span>
            <span className={styles.tagline}>Protein for Sensitive Stomachs</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}><span>HOME</span></Link>
          <Link to="/products" className={styles.navLink}><span>PRODUCTS</span></Link>
          <Link to="/about" className={styles.navLink}><span>ABOUT</span></Link>
          <Link to="/contact" className={styles.navLink}><span>CONTACT</span></Link>
        </div>

        {/* Cart & Mobile Menu Toggle */}
        <div className={styles.rightSection}>
          <button className={styles.cartButton} onClick={handleCartClick}>
            <ShoppingCart className={styles.cartIcon} />
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </button>

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link to="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/products" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link to="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
