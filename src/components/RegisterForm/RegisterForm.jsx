import React, { useState } from 'react';
import './RegisterFormStyles.css';
import { useDispatch } from 'react-redux';
import { authOperations } from '..//../redux/Auth/authOperations';

const RegisterForm = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { id, value } }) => {
    switch (id) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
   };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');   
  }
  
  return (
    <form onSubmit={handleSubmit} className="register-form" autoComplete='off'>
      <h2>Registration</h2>
      <label>
        Username:
        <input type="text" id="name" value={name} onChange={handleChange} autoComplete="name"/>
      </label>
      <label>
        Email:
        <input type="email" id="email" value={email} onChange={handleChange} autoComplete="email"/>
      </label>
      <label>
        Password:
        <input type="password" id="password" value={password} onChange={handleChange} autoComplete="current-password"/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
