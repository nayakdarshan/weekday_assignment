import { configureStore } from '@reduxjs/toolkit';
import jobListingsReducer from './jobListingsSlice';

export const store = configureStore({
  reducer: {
    jobListings: jobListingsReducer,
  },
});