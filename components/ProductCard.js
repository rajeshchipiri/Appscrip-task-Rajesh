"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.image} 
          alt={product.title} 
          width={300} 
          height={400} 
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.mainInfo}>
          <h3 className={styles.title}>{product.title}</h3>
          <button 
            className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Add to favorites"
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <p className={styles.priceRow}>
          <span className={styles.secondaryText}>Sign in or Create an account to see price</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
