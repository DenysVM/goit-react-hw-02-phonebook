import React from 'react';
import styles from '../Navigation/Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/authSelectors';
import { authOperations } from '../../redux/Auth/authOperations';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector(authSelectors.getUsername);

    const handleLogout = () => {
        dispatch(authOperations.logOut());
        navigate('/');
    };

    return (
        <div className={styles.authLinks}>
            <p className={styles.welcomeText}>Welcome, {name}</p>
            <button onClick={handleLogout} className={styles.logOutButton}>Logout</button>
        </div>
    );
};

export default UserMenu;
