"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

// Define a type for the slice state
interface Authstate {
  value: boolean;
  counter: number;
  circle: boolean;
  circle2: boolean;
  indcircle: boolean;
  val: boolean;
  isauthenticated: boolean;
  msglength: number;
}

// Define the initial state using that type
const initialState: Authstate = {
  circle: false,
  circle2: false,
  indcircle: false,
  value: false,
  counter: 0,
  val: false,
  isauthenticated: false,
  msglength: 0,
};

export const Authslice = createSlice({
  name: "Authslice",
  // `Authslice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    AssignTrue: (state) => {
      state.value = true;
    },
    AssignFalse: (state) => {
      state.value = false;
    },
    AssignCirTrue: (state) => {
      state.circle = true;
    },
    AssignCirFalse: (state) => {
      state.circle = false;
    },
    AssignCir2True: (state) => {
      state.circle2 = true;
    },
    AssignCir2False: (state) => {
      state.circle2 = false;
    },
    AssignIndCirTrue: (state) => {
      state.indcircle = true;
    },
    AssignIndCirFalse: (state) => {
      state.indcircle = false;
    },
    incrementCounter: (state) => {
      state.counter = Math.min(state.counter + 1, 12);
    },
    decrementCounter: (state) => {
      state.counter = Math.max(state.counter - 1, 0);
    },
    setCounter: (state, action: PayloadAction<number>) => {
      console.log(action, "action");

      state.counter = action.payload;
    },
    AssignZero: (state) => {
      state.val = true;
    },
    AssignZeroFalse: (state) => {
      state.val = false;
    },
    AssignauthFalse: (state) => {
      state.isauthenticated = false;
    },
    AssignauthTrue: (state) => {
      state.isauthenticated = true;
    },
    Updatelength: (state, action) => {
      state.msglength = action.payload;
    },
  },
});

export const {
  AssignTrue,
  AssignFalse,
  incrementCounter,
  decrementCounter,
  setCounter,
  AssignCirTrue,
  AssignCirFalse,
  AssignIndCirTrue,
  AssignIndCirFalse,
  AssignCir2True,
  AssignCir2False,
  AssignZero,
  AssignZeroFalse,
  AssignauthFalse,
  AssignauthTrue,
  Updatelength
} = Authslice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default Authslice.reducer;
