import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dex, Pokemon } from '../../models/models';
import { getDex, getPokemons } from '../pokemonsCreators';

interface PokemonsState {
  dex: Dex | null;
  pokemonsSpeciesList: Pokemon[];
}

const initialState: PokemonsState = {
  dex: null,
  pokemonsSpeciesList: []
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [getDex.fulfilled.type]: (state, action: PayloadAction<Dex>) => {
      state.dex = action.payload;
    },
    [getPokemons.fulfilled.type]: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonsSpeciesList = action.payload;
    }
  }
});

export default pokemonSlice.reducer;
