import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
import filterReduser from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReduser,
  },
});
