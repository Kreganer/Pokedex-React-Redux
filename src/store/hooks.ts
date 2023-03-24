import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { bindActionCreators } from 'redux';
import { pokemonsThunkActions } from './pokemonsCreators';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const allActions = {
  ...pokemonsThunkActions
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(allActions, dispatch);
};
