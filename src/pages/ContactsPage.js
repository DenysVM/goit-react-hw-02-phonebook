import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';

const ContactsPage = () => {
    return (
        <div>
            <h2>Контакты</h2>
            <ContactForm />
            <h3>Список контактов</h3>
            <Filter />
            <ContactList />
        </div>
    );
};

export default ContactsPage;
