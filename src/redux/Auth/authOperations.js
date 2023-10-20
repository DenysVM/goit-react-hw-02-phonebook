import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        toast.success('Registration successful!');
        return data;
    } catch (error) {
        toast.error('Sorry. Cannot restration this email');
    }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials)
        token.set(data.token);
        return data;
    } catch (error) {

    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout')
        token.unset();
    } catch (error) {
    }
});

export const authOperations = { register, logIn, logOut };
