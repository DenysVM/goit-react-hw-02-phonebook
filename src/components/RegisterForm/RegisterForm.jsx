import React from 'react';
import './RegisterFormStyles.css';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <h2>Registration</h2>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
