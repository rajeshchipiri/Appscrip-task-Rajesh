"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FilterSidebar.module.css';

const FilterItem = ({ title, options, isExpanded, onToggle }) => {
  return (
    <div className={styles.filterItem}>
      <button className={styles.filterHeader} onClick={onToggle}>
        <div className={styles.filterTitle}>
          <h3>{title}</h3>
          <span>All</span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className={styles.filterOptions}>
          <button className={styles.unselectAll}>Unselect all</button>
          {options.map((option, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const filters = [
    { title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
    { title: 'WORK', options: ['Office', 'Field', 'Remote'] },
    { title: 'FABRIC', options: ['Cotton', 'Linen', 'Silk'] },
    { title: 'SEGMENT', options: ['Premium', 'Economy'] },
    { title: 'SUITABLE FOR', options: ['Summer', 'Winter'] },
    { title: 'RAW MATERIALS', options: ['Natural', 'Synthetic'] },
    { title: 'PATTERN', options: ['Plain', 'Printed', 'Striped'] },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizable}>
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>
      
      {filters.map((filter, index) => (
        <FilterItem 
          key={index}
          title={filter.title}
          options={filter.options}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
        />
      ))}
    </aside>
  );
};

export default FilterSidebar;
