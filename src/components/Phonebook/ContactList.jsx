import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
       <li key={contact.id}>
          <strong>Name:</strong> {contact.name}, <strong>Number:</strong> {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
