import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../..//redux/contactsSlice'; 
import styles from './/../Phonebook.module.css'
import { getContacts } from 'redux/helpers';


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in your contacts`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

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
