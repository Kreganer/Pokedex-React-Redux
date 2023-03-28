import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dex, Pokemon } from '../../models/models';
import { getDex, getPokemons} from '../pokemonsCreators';

interface PokemonsState {
  isLoading: boolean;
  limit: number;
  currentPage: number;
  dexName: string;
  dex: Dex | null;
  pokemonsSpeciesList: Pokemon[];
  error: string | null;
}

const initialState: PokemonsState = {
  isLoading: false,
  limit: 10,
  currentPage: 0,
  dexName: 'national',
  dex: null,
  pokemonsSpeciesList: [],
  error: null
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
    },
  }
});

export default pokemonSlice.reducer;
