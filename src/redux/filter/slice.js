import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    resetFilter: state => {
      state.filter = '';
    },
  },
  selectors: {
    selectFilters: state => state.filter,
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter, resetFilter } = slice.actions;
export const { selectFilters } = slice.selectors;
