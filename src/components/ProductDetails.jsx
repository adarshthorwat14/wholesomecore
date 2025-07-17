// src/pages/ProductDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import { useCart } from '../context/CartContext';

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const productData = [
  {
    id: '1',
    name: 'Wholesomecore Almond Protein Powder — Gut-Friendly, Clean Nutrition | 14 g Protein per Serving',
    originalPrice: '₹1,999.00',
    price: '₹1,699.00',
    image: product1,
    highlights: [
      '✔ 100% Almond Protein',
      '✔ No Gums, No Dairy, No Fillers',
      '✔ Just Almonds. Nothing Else.',
    ],
    description:
      'Wholesomecore Almond Protein is designed for real people with sensitive stomachs. No bloating. No junk. Just clean, gut-friendly protein your body actually recognizes.',
    benefits: [
      'Simple, Real Ingredients',
      'Easy to Digest',
      'No Artificial Junk — Ever',
    ],
    category: 'Protein Powder',
  },
  {
    id: '2',
    name: 'Chocolate Almond Protein',
    originalPrice: '₹1,999.00',
    price: '₹1,599.00',
    image: product2,
    highlights: ['✔ Chocolate Flavor', '✔ Dairy-Free', '✔ Vegan Friendly'],
    description: 'Chocolate almond protein for sensitive stomachs.',
    benefits: ['Plant-Based', 'Gut Friendly', 'Tasty'],
    category: 'Protein Powder',
  },
  {
    id: '3',
    name: 'Unflavored Almond Protein',
    originalPrice: '₹1,799.00',
    price: '₹1,299.00',
    image: product3,
    highlights: ['✔ Pure Almond', '✔ No Flavor', '✔ High Digestibility'],
    description: 'Unflavored protein ideal for smoothies, baking, and more.',
    benefits: ['Versatile Use', 'No Aftertaste', 'Clean Nutrition'],
    category: 'Protein Powder',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.imageSection}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.infoSection}>
        <h1 className={styles.title}>{product.name}</h1>

        <div className={styles.priceSection}>
          <span className={styles.originalPrice}>{product.originalPrice}</span>
          <span className={styles.price}>{product.price}</span>
          <span className={styles.shipping}>+ Free Shipping</span>
        </div>

        <ul className={styles.highlights}>
          {product.highlights.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        <p className={styles.description}>{product.description}</p>

        <hr className={styles.divider} />

        <h3 className={styles.subheading}>Key Benefits:</h3>
        <ul className={styles.benefits}>
          {product.benefits.map((benefit, idx) => (
            <li key={idx}>• {benefit}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>

        <div className={styles.category}>
          Category: <span>{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
