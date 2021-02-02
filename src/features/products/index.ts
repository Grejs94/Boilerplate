import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

import api from "api";

import { initialState } from "./data";

export const groceriesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementValue: (state) => {
      if (state.value > 98) {
        return;
      }

      state.value = ++state.value;
    },
    decrementValue: (state) => {
      if (state.value < 1) {
        return;
      }

      state.value = --state.value;
    },
    setValue: (state, action) => {
      const payloadAsNumber = Number(action.payload);

      if (!payloadAsNumber) {
        return;
      }

      if (payloadAsNumber > 99 || payloadAsNumber < 0) {
        return;
      }

      state.value = payloadAsNumber;
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
    setProductsData: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  incrementValue,
  decrementValue,
  setValue,
  fetchDataStarted,
  fetchDataSucceeded,
  fetchDataFailed,
  setProductsData,
} = groceriesSlice.actions;

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataStarted());
  try {
    const productsData = await api.products.getProducts();
    dispatch(setProductsData(productsData));
    dispatch(fetchDataSucceeded());
  } catch (error) {
    dispatch(fetchDataFailed());
  }
};

export const selectExampleValue = (state: any) => state.products.value;

export default groceriesSlice.reducer;
