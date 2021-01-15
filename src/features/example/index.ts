import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./data";

export const groceriesSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    incrementValue: (state) => {
      state.value = ++state.value;
    },
    decrementValue: (state) => {
      state.value = --state.value;
    },
    fetchDataStarted: (state) => {
      state.dataStatus = "inProgress";
    },
    fetchDataSucceeded: (state) => {
      state.dataStatus = "succeeded";
    },
    fetchDataFailed: (state) => {
      state.dataStatus = "failed";
    },
  },
});

export const {
  incrementValue,
  decrementValue,
  fetchDataStarted,
  fetchDataSucceeded,
  fetchDataFailed,
} = groceriesSlice.actions;

export const selectExampleValue = (state: any) => state.example.value;

export default groceriesSlice.reducer;
