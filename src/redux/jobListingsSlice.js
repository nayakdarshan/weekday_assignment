import { createSlice } from '@reduxjs/toolkit';

export const jobListingsSlice = createSlice({
  name: 'jobListings',
  initialState: {
    listings: [],
    filters: {
      role: '',
      employees: '',
      experience: '',
      remote: '',
      minBasePay: '',
      search: ''
    },
  },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setListings, setFilters } = jobListingsSlice.actions;

export const selectListings = (state) => state.jobListings.listings;
export const selectFilters = (state) => state.jobListings.filters;

export default jobListingsSlice.reducer;
