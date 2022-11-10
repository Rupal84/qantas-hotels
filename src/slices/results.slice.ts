import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHotel } from "../common/types";
import { RootState } from "../store/configureStore";

interface IInitialState {
    hotels: IHotel[];
    isLoading: boolean;
}

const initialState: IInitialState = {
    hotels: [],
    isLoading: false
}

export const results = createSlice({
    name: 'results',
    initialState,
    reducers: {
      fetch: (state) => {
        state.isLoading = true;
      },
      fetchSuccess: (state, {payload}: PayloadAction< IHotel[]>) => {
        state.hotels = payload;
      }
    },
  })
export const resultsReducer = results.reducer;

  export const {fetch, fetchSuccess} = results.actions;

  export const hotels = (state: RootState):IHotel[]=> state.results.hotels;