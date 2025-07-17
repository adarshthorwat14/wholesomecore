// src/pages/OurProducts.jsx

import React from 'react';
import styles from './OurProducts.module.css';
import { useNavigate } from 'react-router-dom';

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product1.jpg';
import product5 from '../assets/product2.jpg';
import product6 from '../assets/product3.jpg';

const products = [
  {
    id: 1,
    name: "Almond Protein Vanilla",
    price: "₹1,299",
    image: product1,
    description: "Gentle on your gut with natural vanilla flavor.",
  },
  {
    id: 2,
    name: "Almond Protein Chocolate",
    price: "₹1,299",
    image: product2,
    description: "Rich chocolate taste, dairy-free and clean.",
  },
  {
    id: 3,
    name: "Almond Protein Unflavored",
    price: "₹1,199",
    image: product3,
    description: "No flavors, just pure almond protein.",
  },
  {
    id: 4,
    name: "Almond Protein with Ashwagandha",
    price: "₹1,499",
    image: product4,
    description: "Stress relief meets nutrition.",
  },
  {
    id: 5,
    name: "Kids Almond Protein",
    price: "₹999",
    image: product5,
    description: "Designed for kids’ sensitive stomachs.",
  },
  {
    id: 6,
    name: "Almond Protein Sachet Pack",
    price: "₹599",
    image: product6,
    description: "On-the-go protein, anytime.",
  },
];

const OurProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.card}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className={styles.image} />
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.description}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
