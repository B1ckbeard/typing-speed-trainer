import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  text: string;
  inputText: string;
};

const initialState: TextState = {
  text: '',
  inputText: ''
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    setInputText(state, action: PayloadAction<string>) {
      state.inputText = action.payload;
    },
  },
});

export const { setText, setInputText } = textSlice.actions;
export default textSlice.reducer;
