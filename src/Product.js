import React from 'react'
import styles from './Product.module.css';

const Product = ({product}) => {
  return (
    <div className={styles.card}>
        <img src={product.image} alt='Product Image'/>
        <h3>{product.title}</h3>
        <p>{product.price} $</p>
        <p>{product.rating} points</p>
    </div>
  );
};

export default Product;