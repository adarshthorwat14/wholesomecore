// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, Package, Info, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Brand Info */}
        <div className={styles.brand}>
          <Heart className={styles.logoIcon} size={32} />
          <h2>Wholesomecore</h2>
          <p>Protein Your Gut Actually Loves.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <Link to="/">
            <Home size={16} style={{ marginRight: '6px' }} />
            Home
          </Link>
          <Link to="/products">
            <Package size={16} style={{ marginRight: '6px' }} />
            Products
          </Link>
          <Link to="/about">
            <Info size={16} style={{ marginRight: '6px' }} />
            About
          </Link>
          <Link to="/contact">
            <Phone size={16} style={{ marginRight: '6px' }} />
            Contact
          </Link>
        </div>

        {/* Contact Info */}
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p>Email: support@wholesomecore.in</p>
        </div>

        {/* Social Media */}
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} Wholesomecore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
