// src/pages/YourCart.jsx

import React from 'react';
import styles from './YourCart.module.css';
import { useCart } from '../context/CartContext';

const YourCart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartList}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.image} />

                <div className={styles.details}>
                  <h2 className={styles.name}>{item.name}</h2>
                  <p className={styles.description}>{item.description}</p>
                  <p className={styles.price}>Price: {item.price}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.remove}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className={styles.subtotal}>
                  ₹{item.quantity * parseInt(item.price.replace(/[₹,]/g, ''))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h3>Total: ₹{totalPrice}</h3>
            <button className={styles.buyNow}>Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default YourCart;
