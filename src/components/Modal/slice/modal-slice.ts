import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../store/store";

type catsState = {
  showModal: boolean
};

const initialState: catsState = {
  showModal: false
};

export const modalSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal.showModal;
export default modalSlice.reducer;