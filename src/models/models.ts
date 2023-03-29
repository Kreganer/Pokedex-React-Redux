export interface PayloadPokemons {
  count: number | null;
  next: string | null;
  previous: string | null;
  dex: Dex[] | [];
  pokemon_entries: IPokemonList[] | [];
  data: Pokemon[] | null;
  pokemon: Pokemon;
}

export interface Dex {
  amountPages: number;
  pokemonList: {
    name: string | null;
    names: {
      language: {
        name: string | null;
        url: string | null;
      };
    };
    pokemon_entries: IPokemonList[] | [];
  };
  pokemonSpeciesList: Pokemon[];
}

export interface Pokemon {
  abilities: {
    ability: IAbilitySpecies[];
    is_hidden: boolean;
    slot: number;
  };
  base_experience: number | null;
  forms: IPokemonList[];
  game_indices: null;
  height: number | null;
  held_items: null;
  id: number | null;
  is_default: boolean | null;
  location_area_encounters: string | null;
  moves: IMovesSpecies[];
  name: string;
  order: number;
  past_types: null;
  species: IPokemonList[];
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      home: {
        front_default: string;
        front_shiny: string;
      };
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };
  stats: IPokemonStats[];
  types: IPokemonTypes[];
  weight: number | null;
  varieties: PokemonVarieties[] | [];
}

export interface IPokemonList {
  entry_number: number | null;
  pokemon_species: {
    name: string | null | undefined;
    url: string | null | undefined;
  };
}

export interface PokemonVarieties {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface IAbilitySpecies {
  name: string;
  url: string;
}

export interface IMovesSpecies {
  name: string;
  url: string;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface IPokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonCards {
  currentPokemon: Pokemon;
}
