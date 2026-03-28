import React from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Strip */}
      <div className={styles.topStrip}>
        <div className="container">
          <div className={styles.topContent}>
            <span>Lorem ipsum dolor</span>
            <span>Lorem ipsum dolor</span>
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="container">
        {/* Row 1: Logo & Icons */}
        <div className={styles.headerTop}>
          <div className={styles.leftSection}>
            <button className={styles.mobileMenu}><Menu size={24} /></button>
            <button aria-label="Search" className={styles.iconBtn}><Search size={24} /></button>
          </div>
          
          <div className={styles.logo}>LOGO</div>

          <div className={styles.actions}>
            <button aria-label="Favorites" className={styles.iconBtn}><Heart size={24} /></button>
            <button aria-label="Cart" className={styles.iconBtn}><ShoppingBag size={24} /></button>
            <button aria-label="Profile" className={`${styles.iconBtn} ${styles.profile}`}><User size={24} /></button>
            <div className={styles.language}>ENG ▾</div>
          </div>
        </div>

        {/* Row 2: Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul>
            <li><Link href="#">SHOP</Link></li>
            <li><Link href="#">SKILLS</Link></li>
            <li><Link href="#">STORIES</Link></li>
            <li><Link href="#">ABOUT</Link></li>
            <li><Link href="#">CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
