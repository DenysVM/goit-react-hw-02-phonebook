import React, { useEffect, useState } from 'react';
import './StylesEditContactModal.css';
import { updateContact } from 'redux/Contacts/contactsOperations';
import { useDispatch } from 'react-redux';

const EditContactModal = ({ contact, onClose, onUpdate }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleUpdateClick = () => {
    dispatch(
      updateContact({
        id: contact.id,
        name,
        number,
      })
    )
      .then(() => {
        onUpdate();
      })
      .catch((error) => {
        // Обработка ошибки
      });
    onClose();
  };

  const handleCloseClick = () => {
    onClose();
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, );

  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close-button" onClick={handleCloseClick}>
          X
        </span>
        <h2>Edit Contact</h2>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
        <input type="text" value={number} onChange={handleNumberChange} placeholder="Number" />
        <button onClick={handleUpdateClick}>Update contact</button>
      </div>
    </div>
  );
};

export default EditContactModal;
