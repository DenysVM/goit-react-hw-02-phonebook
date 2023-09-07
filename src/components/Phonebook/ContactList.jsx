import React from 'react';
import styles from './Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
       <li key={contact.id} className={styles.contact_item}>
          <strong>Name:</strong> {contact.name}, <strong>Number:</strong> {contact.number}
          <button onClick={() => onDeleteContact(contact.id)} className={styles.delete_button}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
