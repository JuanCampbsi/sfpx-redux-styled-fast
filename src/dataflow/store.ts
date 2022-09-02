import { configureStore } from '@reduxjs/toolkit';
import state from './reducers';

export const store = configureStore({
  reducer: {
    state: state,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
