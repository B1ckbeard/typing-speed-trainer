import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  text: string;
  inputText: string;
};

const initialState: TextState = {
  text: `In a hole in the ground there lived a hobbit.`.toLowerCase().replace(/[.,:-]/g, ''),
  inputText: ''
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload.toLowerCase().replace(/[.,:-]/g, '');
    },
    setInputText(state, action: PayloadAction<string>) {
      state.inputText = action.payload;
    },
  },
});

export const { setText, setInputText } = textSlice.actions;
export default textSlice.reducer;
