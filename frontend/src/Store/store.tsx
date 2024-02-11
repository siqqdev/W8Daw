import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import playReducer from './playSlice'

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    play: playReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
