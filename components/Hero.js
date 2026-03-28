import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque et diam nisi nisl. 
            Accumsan id faucibus faucibus diam. Adipiscing vulputate integer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
