import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/contacts" className={styles.navLink}>Contacts</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/register" className={styles.navLink}>Registration</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/login" className={styles.navLink}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
