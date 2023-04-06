import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from 'src/helpers/constants';
import { Dex, PayloadPokemons, Pokemon, TypesEffectivity } from 'src/models/models';

interface PageParams {
  currentPage: number;
  amountPages?: number;
  limit: number;
  sort?: string | null;
  search?: string | null;
  dexName?: string | null;
  dex?: Dex | null;
}

interface PokemonParams {
  currentPokemon: Pokemon | null;
}

export const getPokemons = createAsyncThunk('pokemons/fetch', async (query: PageParams) => {
  try {
    const pokemonList = await axios.get<PayloadPokemons>(`${url}pokedex/${query.dexName}/`);

    const pokemonSpeciesList = [];
    const maxPages = Math.ceil(pokemonList.data.pokemon_entries.length / query.limit);

    let currentPage = query.currentPage - 1;
    let length = currentPage * query.limit + query.limit;

    if (currentPage >= maxPages) {
      console.log(maxPages);

      currentPage = maxPages - 1;
    }

    if (currentPage === maxPages - 1) {
      length = pokemonList.data.pokemon_entries.length;
    }

    for (let index = currentPage * query.limit; index < length; index++) {
      const pokemon = await axios.get<Pokemon>(
        `${pokemonList.data.pokemon_entries[index].pokemon_species.url?.replace('-species', '')}`
      );

      pokemonSpeciesList.push(pokemon.data);
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

export const getTypesEffectivity = createAsyncThunk(
  'poketype/fetch',
  async (query: PokemonParams) => {
    try {
      const pokemonTypesEffectivity = [];
      if (query.currentPokemon) {
        for (let index = 0; index < query.currentPokemon.types.length; index++) {
          const typeInformation = await axios.get<TypesEffectivity>(
            `${url}type/${query.currentPokemon.types[index].type.name}/`
          );

          pokemonTypesEffectivity.push(typeInformation.data);
        }
      }

      return pokemonTypesEffectivity;
    } catch (e) {
      return e;
    }
  }
);

export const pokemonsThunkActions = {
  getPokemons,
  getTypesEffectivity
};
