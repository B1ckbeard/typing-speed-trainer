import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './statsSlice';
import textReducer from './textSlice';
import modalReducer from './modalSlice';
import timerReducer from './timerSlice';

const store = configureStore({
  reducer: {
    textSlice: textReducer,
    statsSlice: statsReducer,
    modalSlice: modalReducer,
    timerSlice: timerReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
