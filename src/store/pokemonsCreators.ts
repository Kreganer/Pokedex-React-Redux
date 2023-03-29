import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../helpers/constants';
import { Dex, PayloadPokemons, Pokemon } from '../models/models';

interface PageParams {
  currentPage: number;
  amountPages?: number;
  limit: number;
  sort?: string | null;
  search?: string | null;
  dexName?: string | null;
  dex?: Dex | null;
}

export const getPokemons = createAsyncThunk('pokemons/fetch', async (query: PageParams) => {
  try {
    const pokemonList = await axios.get<PayloadPokemons>(`${url}pokedex/${query.dexName}/`);

    const pokemonSpeciesList = [];
    const maxPages = Math.ceil(pokemonList.data.pokemon_entries.length / query.limit);

    const currentPage = query.currentPage - 1;
    let length = currentPage * query.limit + query.limit;

    if (currentPage === maxPages - 1) {
      length = pokemonList.data.pokemon_entries.length;
    }

    for (let index = currentPage * query.limit; index < length; index++) {
      const pokemon = await axios.get<Pokemon>(
        `${url}pokemon-species/${pokemonList.data.pokemon_entries[index].pokemon_species.name}`
      );

      const pokemonSpecies = await axios.get<Pokemon>(
        `${url}pokemon/${pokemon.data.varieties[0].pokemon.name}`
      );

      pokemonSpeciesList.push(pokemonSpecies.data);
    }

    return {
      pokemonList: pokemonList.data,
      amountPages: maxPages,
      pokemonSpeciesList: pokemonSpeciesList
    };
  } catch (e) {
    return e;
  }
});

export const pokemonsThunkActions = {
  getPokemons
};
