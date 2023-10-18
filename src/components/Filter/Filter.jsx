import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import '../ContactForm/ContactForm'; 
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div className="form-container">
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className="input-field"
        />
      </label>
    </div>
  );
};

export default Filter;
