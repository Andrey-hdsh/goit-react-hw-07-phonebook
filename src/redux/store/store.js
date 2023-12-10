import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from '../slice/contactsSlice';
import { filterReducer } from 'redux/slice/filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
