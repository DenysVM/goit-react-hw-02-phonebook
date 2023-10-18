import React, { useState } from 'react';
import '../components/LoginForm/LoginFormStyles.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Добавьте вашу логику входа здесь
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-heading">Login</h2>
                <label htmlFor="email" className="login-label">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="login-label">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
