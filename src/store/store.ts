import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonsReducer from './reducers/pokemonsReducer';

export const store = configureStore({
  reducer: {
    pokemonsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
