import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  text: string;
  inputText: string;
};

const initialState: TextState = {
  text: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole,
filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy
hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and
that means comfort`.toLowerCase().replace(/[.,:-]/g, '').replace(/[\r\n]+/g, ' '),
  inputText: ''
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload.toLowerCase().replace(/[.,:-]/g, '').replace(/[\r\n]+/g, ' ');
    },
    setInputText(state, action: PayloadAction<string>) {
      state.inputText = action.payload;
    },
  },
});

export const { setText, setInputText } = textSlice.actions;
export default textSlice.reducer;
