import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export { store };
