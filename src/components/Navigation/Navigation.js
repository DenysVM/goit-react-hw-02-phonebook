import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import authSelectors from '..//..//redux/Auth/authSelectors';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                {isLoggedIn && (
                    <li className={styles.navItem}>
                        <Link to="/contacts" className={styles.navLink}>Contacts</Link>
                    </li>
                )}
                {isLoggedIn ? (
                    <li className={styles.navItem}>
                        <UserMenu />
                    </li>
                ) : (
                    <div className={styles.authLinks}>
                        <li className={styles.navItem}>
                            <Link to="/register" className={styles.navLink}>Registration</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/login" className={styles.navLink}>Login</Link>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
