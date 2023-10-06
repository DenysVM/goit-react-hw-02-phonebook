import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '..//..//redux/contactsSlice';
import styles from '../Phonebook.module.css';
import { getContacts, getFilter } from 'redux/helpers';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter); 
  const dispatch = useDispatch();

    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contact_item}>
          <strong>Name:</strong> {contact.name}, <strong>Number:</strong> {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))} className={styles.delete_button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
