import React, { useState, useEffect, useCallback } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import styles from '../components/Phonebook.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = useCallback(
    (name, number) => {
      const isExist = contacts.some((contact) => contact.name === name);

      if (isExist) {
        alert(`${name} is already in contacts.`);
        return;
      }

      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts((prevContacts) => [...prevContacts, contact]);
    },
    [contacts]
  );

  const deleteContact = useCallback(
    (contactId) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    },
    []
  );

  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value.toLowerCase());
  }, []);

  const getFilteredContacts = useCallback(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
