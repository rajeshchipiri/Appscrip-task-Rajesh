"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(initialProducts.length === 0);
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [isSortOpen, setIsSortOpen] = useState(false);

  useEffect(() => {
    // If we already have products (SSR success), don't fetch again
    if (products.length > 0) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Client-side fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products.length]);

  const sortOptions = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE: HIGH TO LOW',
    'PRICE: LOW TO HIGH'
  ];

  return (
    <div className={styles.productListContainer}>
      {/* Action Bar */}
      <div className={styles.actionBar}>
        <div className={styles.leftActions}>
          <span className={styles.itemCount}>
            {loading ? 'LOADING...' : `${products.length} ITEMS`}
          </span>
          <button 
            className={styles.filterToggle} 
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? (
              <span className={styles.filterLink}><ChevronLeft size={16} /> HIDE FILTER</span>
            ) : (
              <span className={styles.filterLink}><ChevronRight size={16} /> SHOW FILTER</span>
            )}
          </button>
        </div>

        <div className={styles.rightActions}>
          <div className={styles.sortContainer}>
            <button 
              className={styles.sortButton}
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              {sortBy} <ChevronDown size={16} />
            </button>
            {isSortOpen && (
              <div className={styles.sortDropdown}>
                {sortOptions.map(option => (
                  <button 
                    key={option}
                    className={`${styles.sortOption} ${sortBy === option ? styles.activeOption : ''}`}
                    onClick={() => {
                        setSortBy(option);
                        setIsSortOpen(false);
                    }}
                  >
                    {sortBy === option && '✓ '} {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {showFilter && <FilterSidebar />}
        <div className={`${styles.gridWrapper} ${!showFilter ? styles.fullWidth : ''}`}>
          <div className={styles.productGrid}>
            {loading ? (
                 <div className={styles.loadingState}>Loading products...</div>
            ) : (
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
