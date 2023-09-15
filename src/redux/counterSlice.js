import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state,action) => {
          return [
              ...state.contacts,
              {action.payload}
      ]
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
