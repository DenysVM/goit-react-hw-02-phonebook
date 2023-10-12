import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import styles from '../Phonebook.module.css';
import { getContacts, getFilter } from 'redux/helpers';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const filteredContacts = contacts
  ? contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter ? filter.toLowerCase() : "")
    )
    : [];
  
  
  return (
    <ul>
  {filteredContacts.map((contact) => (
    <li key={contact.id} className={styles.contact_item}>
      <p className={styles.name}><strong >Name:</strong> {contact.name}, <br /></p>
      <p className={styles.phone}><strong >Number:</strong> {contact.phone}</p>
      <button onClick={() => dispatch(deleteContact(contact.id))} className={styles.delete_button}>
        Delete
      </button>
    </li>
  ))}
</ul>

  );
};

export default ContactList;
