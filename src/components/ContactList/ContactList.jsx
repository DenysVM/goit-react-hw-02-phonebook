import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact, updateContact } from 'redux/Contacts/contactsOperations';
import '../ContactForm/ContactForm'; 
import { selectContacts, selectFilter } from 'redux/selectors';
import EditContactModal from '../EditContactModal/EditContactModal'

const ContactList = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const updateContactList = () => {
  dispatch(fetchContacts()); 
};


  const filteredContacts = contacts
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter ? filter.toLowerCase() : "")
      )
    : [];
  
  const handleEditClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
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
            <button onClick={() => handleEditClick(contact)} className="edit-button"> Edit </button>
            <button onClick={() => dispatch(deleteContact(contact.id))} className="delete-button"> Delete </button>
          </div>
        </li>
      ))}
    </ul>
  {selectedContact && (
  <EditContactModal
    contact={selectedContact}
    onUpdate={updateContact}
    onClose={() => {
      setSelectedContact(null);
      updateContactList(); 
    }}
  />
)}
 
   
  </div> 
  );
};

export default ContactList;
