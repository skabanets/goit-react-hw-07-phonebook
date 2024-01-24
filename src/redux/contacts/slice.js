import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';

const initialState = {
  contacts: [],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(item => item.id === payload.id);
        state.contacts.splice(index, 1);
      });
  },
  selectors: {
    selectContacts: state => state.contacts,
  },
});

export const contactsReducer = slice.reducer;
export const { selectContacts } = slice.selectors;
