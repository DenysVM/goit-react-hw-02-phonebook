import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '..//..//redux/contactsSlice';
import styles from '../Phonebook.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter); 
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
