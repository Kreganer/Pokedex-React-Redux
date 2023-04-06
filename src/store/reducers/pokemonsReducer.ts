import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dex } from 'src/models/models';
import { getPokemons } from '../pokemonsCreators';

interface PokemonsState {
  isLoading: boolean;
  currentPage: number;
  dexName: string;
  dex: Dex | null;
  error: string | null;
}

const initialState: PokemonsState = {
  isLoading: false,
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
    [getPokemons.pending.type]: (state, action: PayloadAction<Dex>) => {
      state.isLoading = true;
    },
    [getPokemons.fulfilled.type]: (state, action: PayloadAction<Dex>) => {
      state.isLoading = false;
      state.dex = action.payload;
    }
  }
});

export default pokemonSlice.reducer;
