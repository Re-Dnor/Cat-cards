import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "../components/Cards/slice/cats-slice";

const store = configureStore({
  reducer: {
    cats: catsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
