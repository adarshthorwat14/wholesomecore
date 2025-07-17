// src/components/ProductModal.jsx

import React from 'react';
import styles from './ProductModal.module.css';

const ProductModal = ({ product, onClose, onAdd, quantity, onIncrease, onDecrease }) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className={styles.price}>{product.price}</p>

        {quantity ? (
          <div className={styles.quantityControl}>
            <button onClick={onDecrease}>−</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
          </div>
        ) : (
          <button onClick={onAdd} className={styles.addBtn}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
