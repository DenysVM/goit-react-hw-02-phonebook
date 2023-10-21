import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/Contacts/contactsOperations';
import '../ContactForm/ContactForm'; 
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
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
    <ul className="contacts-list">
      {filteredContacts.map((contact) => (
        <li key={contact.id} className="contact-card">
          <p className="contact-name">
            <strong>Name:</strong> {contact.name}, <br />
          </p>
          <p className="contact-phone">
            <strong>Number:</strong> {contact.number}
          </p>
          <div className="button-container">
            <button className="edit-button"> Edit </button>
            <button onClick={() => dispatch(deleteContact(contact.id))} className="delete-button"> Delete </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
