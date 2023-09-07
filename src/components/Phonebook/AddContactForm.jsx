import React, { Component } from 'react';
import styles from './Phonebook.module.css';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

 handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const isExist = this.props.contacts.some((contact) => contact.name === name);

    if (isExist) {
        alert(`${name} is already in contacts.`);
        this.setState({ name: '', number: '' });
      return;
    }

    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };


  render() {
      return (
          <div className={styles.form_container}>
              <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          className={styles.input_field}
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          className={styles.input_field}
        />
        <button type="submit" className={styles.add_contact_button}>Add contact</button>
      </form></div>
      
    );
  }
}

export default AddContactForm;