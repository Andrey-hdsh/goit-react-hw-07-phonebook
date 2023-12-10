import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from 'redux/filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
