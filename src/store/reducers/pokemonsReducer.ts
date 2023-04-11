import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dex, TypeEffectivity } from 'src/models/models';
import { getPokemons, getTypesEffectivity } from '../pokemonsCreators';

interface PokemonsState {
  isLoading: boolean;
  currentPage: number;
  dexName: string;
  dex: Dex | null;
  error: string | null;
  typesEffectivity: TypeEffectivity[] | null;
}

const initialState: PokemonsState = {
  isLoading: false,
  currentPage: 0,
  dexName: 'national',
  dex: null,
  error: null,
  typesEffectivity: null
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemons.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPokemons.fulfilled.type]: (state, action: PayloadAction<Dex>) => {
      state.isLoading = false;
      state.dex = action.payload;
    },
    [getTypesEffectivity.fulfilled.type]: (state, action: PayloadAction<TypeEffectivity[]>) => {
      state.typesEffectivity = action.payload;
    }
  }
});

export default pokemonSlice.reducer;
