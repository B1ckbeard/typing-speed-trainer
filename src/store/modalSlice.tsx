import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  isOpened: boolean;
  modalType: string;
};

const initialState: ModalState = {
  isOpened: false,
  modalType: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.isOpened = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isOpened = false;
      state.modalType = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
