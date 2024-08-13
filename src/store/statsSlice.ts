import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

type StatsState = {
  mistakes: number;
};

const initialState: StatsState = {
  mistakes: 0,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setMistakes(state, action: PayloadAction<number>) {
      state.mistakes = action.payload;
    }
  },
});

export const { setMistakes } = statsSlice.actions;
export default statsSlice.reducer;
