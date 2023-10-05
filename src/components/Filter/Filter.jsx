import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice'; 
import styles from '../Phonebook.module.css';
import { getFilter } from 'redux/helpers';

const Filter = () => {
  const filter = useSelector(getFilter); 
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div className={styles.form_container}>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={styles.input_field}
        />
      </label>
    </div>
  );
};

export default Filter;
