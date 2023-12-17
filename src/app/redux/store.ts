import { configureStore } from "@reduxjs/toolkit";
import characterFavoriteReducer from "./features/characterFavoriteSlice";
import searchReducer from "./features/serachSlice";

export const store = configureStore({
  reducer: {
    characterFavoriteReducer,
    searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
