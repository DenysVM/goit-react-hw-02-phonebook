import React from 'react';
import styles from '../Phonebook.module.css';

const Filter = ({ filter, onChange }) => (
    <div className={styles.form_container}>
        <label>
    Find contacts by name:
    <input type="text" value={filter} onChange={onChange} className={styles.input_field}/>
        </label>
    </div>
);

export default Filter;
