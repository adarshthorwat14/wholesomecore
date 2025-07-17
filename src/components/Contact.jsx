// src/pages/Contact.jsx

import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <h1 className={styles.heading}>Get in Touch</h1>
      <p className={styles.subtext}>
        Have questions, feedback, or need help? We're here to support your gut-friendly journey!
      </p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea placeholder="Write your message..." rows="5" required></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>

      <div className={styles.contactInfo}>
        <h3>Contact Info</h3>
        <p>Email: support@wholesomecore.in</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Pune, Maharashtra, India</p>
      </div>
    </div>
  );
};

export default Contact;
