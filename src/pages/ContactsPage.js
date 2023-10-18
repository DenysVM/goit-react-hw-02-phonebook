import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';

import '../components/ContactForm/ContactsForm.css';

const ContactsPage = () => {
    return (
        <div className="contacts-container">
            <h2 className="page-title">Contacts</h2>
            <ContactForm />
            <h3 className="list-title">Contacts list</h3>
            <Filter />
            <ContactList />
        </div>
    );
};

export default ContactsPage;
