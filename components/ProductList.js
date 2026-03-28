"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [isSortOpen, setIsSortOpen] = useState(false);

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
          <span className={styles.itemCount}>{products.length} ITEMS</span>
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
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
