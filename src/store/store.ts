import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './statsSlice';
import textReducer from './textSlice';

const store = configureStore({
  reducer: {
    statsSlice: statsReducer,
    textSlice: textReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
