import React, { useState } from 'react';
import styles from '../Phonebook.module.css';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData.name, formData.number);
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={formData.name}
        onChange={handleChange}
        className={styles.input_field}
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={formData.number}
        onChange={handleChange}
        className={styles.input_field}
      />
      <button type="submit" className={styles.add_contact_button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
