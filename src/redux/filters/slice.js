import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
