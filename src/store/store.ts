import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "../components/Cards/slice/cats-slice";
import modalReducer from "../components/Modal/slice/modal-slice";


const store = configureStore({
  reducer: {
    cats: catsReducer,
    modal: modalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;