// api.js
import axios from 'axios';
console.log('api.js is executed');

const baseURL = 'https://6526744b917d673fd76c4c6e.mockapi.io';

export const fetchContacts = async () => {
    try {
        const response = await axios.get(`${baseURL}/contacts`);
        return response.data;
    } catch (error) {
        console.error('Error in fetchContacts:', error);
        throw error;
    }
};

export const addContact = async (contact) => {
    try {
        const response = await axios.post(`${baseURL}/contacts`, contact);
        return response.data;
    } catch (error) {
        console.error('Error in addContact:', error);
        throw error;
    }
};

export const deleteContact = async (contactId) => {
    try {
        const response = await axios.delete(`${baseURL}/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        console.error('Error in deleteContact:', error);
        throw error;
    }
};
