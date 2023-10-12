import { createStore, combineReducers, applyMiddleware } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export { store };
