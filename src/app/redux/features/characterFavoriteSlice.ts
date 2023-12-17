import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface CharacterFavoriteState {
  characterFavorite: any[];
}

const initialState: CharacterFavoriteState = {
  characterFavorite: [],
};

export const characterFavoriteSlice = createSlice({
  name: "characterFavorite",
  initialState,
  reducers: {
    addCharacterFavorite: (state, action: PayloadAction<string>) => {
      state.characterFavorite.push(action.payload);
    },

    removeCharacterFavorite: (state, action: PayloadAction<string>) => {
      state.characterFavorite = state.characterFavorite.filter(
        (item) => item?.id !== action.payload
      );
    },
  },
});

export const { addCharacterFavorite, removeCharacterFavorite } =
  characterFavoriteSlice.actions;

export const allCharacterFavorite = (state: RootState) =>
  state.characterFavoriteReducer.characterFavorite;

export default characterFavoriteSlice.reducer;
