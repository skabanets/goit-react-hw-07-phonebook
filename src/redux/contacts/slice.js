import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      const index = state.contacts.findIndex(item => item.id === payload);
      state.contacts.splice(index, 1);
    },
  },
  selectors: {
    selectContacts: state => state.contacts,
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
