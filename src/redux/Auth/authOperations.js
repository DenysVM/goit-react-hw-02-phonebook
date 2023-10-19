import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials)
        toast.success('Registration successful!', {
            position: 'top-right',
            autoClose: 3000,
        });
        return data;
    } catch (error) {

    }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials)
        return data;
    } catch (error) {

    }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('/users/logout', credentials)
        return data;
    } catch (error) {

    }
});

export const authOperations = { register, logIn, logOut };
