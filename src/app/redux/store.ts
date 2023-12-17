import { configureStore } from "@reduxjs/toolkit";
import characterFavoriteReducer from "./features/characterFavoriteSlice";

export const store = configureStore({
  reducer: {
    characterFavoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
