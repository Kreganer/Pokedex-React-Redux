import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dex } from '../../models/models';
import { getPokemons } from '../pokemonsCreators';

interface PokemonsState {
  isLoading: boolean;
  limit: number;
  currentPage: number;
  dexName: string;
  dex: Dex | null;
  error: string | null;
}

const initialState: PokemonsState = {
  isLoading: false,
  limit: 10,
  currentPage: 0,
  dexName: 'national',
  dex: null,
  error: null
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemons.fulfilled.type]: (state, action: PayloadAction<Dex>) => {
      state.dex = action.payload;
    }
  }
});

export default pokemonSlice.reducer;
