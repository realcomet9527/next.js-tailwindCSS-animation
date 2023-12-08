"use client";
import { configureStore } from '@reduxjs/toolkit';
import {  Authslice } from './slices'; // Make sure the path is correct

export const store = configureStore({
  reducer: {
    auth: Authslice,// Assuming Authslice is your auth slice reducer
    // ... other reducers if you have them
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
