import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/Auth/authOperations';
import '../LoginForm/LoginFormStyles.css'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { id, value } }) => {
        switch (id) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit} autoComplete='off'>
                <h2 className="login-heading">Login</h2>
                <label htmlFor="email" className="login-label">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="login-input"
                    value={email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                />
                <label htmlFor="password" className="login-label">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    className="login-input"
                    value={password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                />
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
