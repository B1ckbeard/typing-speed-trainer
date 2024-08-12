import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

type StatsState = {
  isTimerOn: boolean;
  seconds: number;
  isFinished: boolean;
};

const initialState: StatsState = {
  isTimerOn: false,
  seconds: 0,
  isFinished: false
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setIsTimerOn(state, action: PayloadAction<boolean>) {
      state.isTimerOn = action.payload;
    },
    increaseSeconds(state) {
      state.seconds = state.seconds + 1;
    },
    resetSeconds(state) {
      state.seconds = 0;
    },
    setIsFinished(state, action: PayloadAction<boolean>) {
      state.isFinished = action.payload;
    },
  },
});

export const { setIsTimerOn, increaseSeconds, resetSeconds, setIsFinished } = statsSlice.actions;
export default statsSlice.reducer;
