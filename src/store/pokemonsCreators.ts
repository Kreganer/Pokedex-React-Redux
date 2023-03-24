import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../helpers/constants';
import { PayloadPokemons, Pokemon } from '../models/models';

interface PageParams {
  page: number;
  limit: number;
  sort?: string | null;
  search?: string | null;
  dexName?: string | null;
}

interface PokemonsParams {
  type?: string | null;
  name?: string | null;
  dexName?: string | null;
}

export const getDex = createAsyncThunk('dex/fetch', async (query: PokemonsParams) => {
  try {
    const pokemonList = await axios.get<PayloadPokemons>(`${url}pokedex/${query.dexName}`);

    return pokemonList.data;
  } catch (e) {
    return e;
  }
});

export const getPokemons = createAsyncThunk('pokemons/fetch', async (query: PageParams) => {
  try {
    const pokemonList = await axios.get<PayloadPokemons>(`${url}pokedex/${query.dexName}`);

    const pokemonSpeciesList = [];
    const maxPages = Math.floor(pokemonList.data.pokemon_entries.length / query.limit);
    let lenght = query.page * query.limit + query.limit;

    if (query.page === maxPages) {
      // Исправить? Костыль?
      lenght = pokemonList.data.pokemon_entries.length;
    }

    for (let index = query.page * query.limit; index < lenght; index++) {
      const pokemon = await axios.get<Pokemon>(
        `${url}pokemon-species/${pokemonList.data.pokemon_entries[index].pokemon_species.name}`
      );

      const pokemonSpecies = await axios.get<Pokemon>(
        `${url}pokemon/${pokemon.data.varieties[0].pokemon.name}`
      );

      pokemonSpeciesList.push(pokemonSpecies.data);
    }

    return pokemonSpeciesList;
  } catch (e) {
    return e;
  }
});

export const pokemonsThunkActions = {
  getDex,
  getPokemons
};
