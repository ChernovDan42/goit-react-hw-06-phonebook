import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [],
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // state.contacts.push(action.payload);
        return { contacts: [...state.contacts, action.payload] };
      },
      prepare(obj) {
        return {
          payload: {
            ...obj,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      // state.contacts = state.contacts.filter(
      //   contact => contact.id !== action.payload
      // );

      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
