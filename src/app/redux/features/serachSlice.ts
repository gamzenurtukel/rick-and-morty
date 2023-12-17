import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { addSearch } = searchSlice.actions;

export default searchSlice.reducer;
