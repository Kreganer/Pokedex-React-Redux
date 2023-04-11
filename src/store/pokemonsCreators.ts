import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from 'src/helpers/constants';
import {
  Dex,
  PayloadPokemons,
  Pokemon,
  TypeEffectivity,
  TypesEffectivity
} from 'src/models/models';

interface PageParams {
  currentPage: number;
  amountPages?: number;
  limit: number;
  sort?: string | null;
  search: string;
  dexName?: string | null;
  dex?: Dex | null;
}

interface PokemonParams {
  currentPokemon: Pokemon | null;
}

export const getPokemons = createAsyncThunk('pokemons/fetch', async (query: PageParams) => {
  try {
    const pokemonList = await axios.get<PayloadPokemons>(`${url}pokedex/${query.dexName}/`);

    if (query.search.trim() !== null) {
      pokemonList.data.pokemon_entries = pokemonList.data.pokemon_entries.filter((pokemon) =>
        pokemon?.pokemon_species?.name?.includes(query.search.toLocaleLowerCase())
      );
    }

    const pokemonSpeciesList = [];
    const maxPages = Math.ceil(pokemonList.data.pokemon_entries.length / query.limit);

    let currentPage = query.currentPage - 1;
    let length = currentPage * query.limit + query.limit;

    if (currentPage >= maxPages) {
      currentPage = maxPages - 1;
    }

    if (currentPage === maxPages - 1) {
      length = pokemonList.data.pokemon_entries.length;
    }

    if (pokemonList.data.pokemon_entries.length > 0) {
      for (let index = currentPage * query.limit; index < length; index++) {
        const pokemon = await axios.get<Pokemon>(
          `${pokemonList.data.pokemon_entries[index].pokemon_species.url?.replace('-species', '')}`
        );

        pokemonSpeciesList.push(pokemon.data);
      }
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
      const effectivenessAgainstPokemon = [
        {
          name: 'bug',
          value: 1
        },
        {
          name: 'dark',
          value: 1
        },
        {
          name: 'dragon',
          value: 1
        },
        {
          name: 'electric',
          value: 1
        },
        {
          name: 'fairy',
          value: 1
        },
        {
          name: 'fighting',
          value: 1
        },
        {
          name: 'fire',
          value: 1
        },
        {
          name: 'flying',
          value: 1
        },
        {
          name: 'ghost',
          value: 1
        },
        {
          name: 'grass',
          value: 1
        },
        {
          name: 'ground',
          value: 1
        },
        {
          name: 'ice',
          value: 1
        },
        {
          name: 'normal',
          value: 1
        },
        {
          name: 'poison',
          value: 1
        },
        {
          name: 'psychic',
          value: 1
        },
        {
          name: 'rock',
          value: 1
        },
        {
          name: 'steel',
          value: 1
        },
        {
          name: 'water',
          value: 1
        }
      ];

      const pokemonTypesEffectivity = [];
      if (query.currentPokemon) {
        for (let index = 0; index < query.currentPokemon.types.length; index++) {
          const typeInformation = await axios.get<TypesEffectivity>(
            `${url}type/${query.currentPokemon.types[index].type.name}/`
          );

          pokemonTypesEffectivity.push(typeInformation.data);
        }

        calculateEffectivity(pokemonTypesEffectivity, effectivenessAgainstPokemon);
      }

      return effectivenessAgainstPokemon;
    } catch (e) {
      return e;
    }
  }
);

const calculateEffectivity = (
  pokemonTypesEffectivity: Array<TypesEffectivity>,
  effectivenessAgainstPokemon: Array<TypeEffectivity>
) => {
  pokemonTypesEffectivity.forEach((effect) => {
    effect.damage_relations.double_damage_from?.forEach((element) => {
      effectivenessAgainstPokemon.forEach((type) => {
        if (type.name === element.name) {
          const effectValue = type.value;
          Object.defineProperty(type, 'value', {
            value: effectValue * 2,
            configurable: true,
            writable: false
          });
        }
        return;
      });
    });

    effect.damage_relations.half_damage_from?.forEach((element) => {
      effectivenessAgainstPokemon.forEach((type) => {
        if (type.name === element.name) {
          const effectValue = type.value;
          Object.defineProperty(type, 'value', {
            value: effectValue * 0.5,
            configurable: true,
            writable: false
          });

          return;
        }
      });
    });

    effect.damage_relations.no_damage_from?.forEach((element) => {
      effectivenessAgainstPokemon.forEach((type) => {
        if (type.name === element.name) {
          const effectValue = type.value;
          Object.defineProperty(type, 'value', {
            value: effectValue * 0,
            configurable: true,
            writable: false
          });

          return;
        }
      });
    });
  });

  return effectivenessAgainstPokemon;
};

export const pokemonsThunkActions = {
  getPokemons,
  getTypesEffectivity
};
