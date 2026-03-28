import React from 'react';
import { Camera, Facebook, Linkedin, Github, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.newsletter}>
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Sign up for updates from metta muse.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Enter your e-mail..." />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>

                    <div className={styles.contact}>
                        <h3>CONTACT US</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>

                        <h3 className={styles.currencyHeader}>CURRENCY</h3>
                        <div className={styles.currencyBox}>
                            <img src="https://flagcdn.com/w20/us.png" alt="USA Flag" />
                            <span>USD</span>
                        </div>
                        <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottom}>
                    <div className={styles.column}>
                        <h3>metta muse</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Returns</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>FOLLOW US</h3>
                        <div className={styles.socialIcons}>
                            <button aria-label="Instagram"><Camera size={20} /></button>
                            <button aria-label="LinkedIn"><Linkedin size={20} /></button>
                        </div>

                        <h3 className={styles.mettaHeader}>metta muse ACCEPTS</h3>
                        <div className={styles.payments}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" alt="Google Pay" width={40} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width={40} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={40} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={40} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" width={40} />
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>Copyright © 2023 metta muse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
