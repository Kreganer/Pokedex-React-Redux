import { FC, useState } from 'react';
import { Pokemon } from 'src/models/models';
import { useAppSelector } from 'src/store/hooks';
import PokemonCards from '../PokemonCards/PokemonCards';
import {
  GradientBackground,
  NotFound,
  PokemonBox,
  PokemonImage,
  PokemonInfo,
  PokemonListWrapper,
  PokemonsWrapper,
  PokemonTypes,
  Type
} from './style';
import { Loader } from '../Loader/Loader';

const PokemonList: FC = () => {
  const { dex, isLoading } = useAppSelector((state) => state.pokemonsReducer);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  const showPokemonCard = (pokemonSpecies: Pokemon) => {
    setCurrentPokemon(pokemonSpecies);
  };

  return (
    <GradientBackground>
      <PokemonsWrapper>
        {currentPokemon ? <PokemonCards currentPokemon={currentPokemon} /> : <div></div>}
        {isLoading ? (
          <Loader />
        ) : (
          <PokemonListWrapper>
            {dex?.pokemonSpeciesList.length !== 0 ? (
              dex?.pokemonSpeciesList.map((pokemon) => (
                <PokemonBox onClick={() => showPokemonCard(pokemon)} key={pokemon.id}>
                  {pokemon.sprites.front_default !== null ? (
                    <PokemonImage src={pokemon.sprites.front_default} alt="pokemon image" />
                  ) : (
                    <PokemonImage
                      src={pokemon.sprites.other['official-artwork'].front_default}
                      alt="pokemon image"
                    />
                  )}

                  <PokemonInfo>
                    <div>No. {pokemon.id}</div>

                    <div>
                      {pokemon.name
                        .split('-')
                        .map((namesPart) => {
                          const pokemonName =
                            namesPart.charAt(0).toLocaleUpperCase() + namesPart.slice(1);

                          return pokemonName;
                        })
                        .join(' ')}
                    </div>
                  </PokemonInfo>

                  <PokemonTypes>
                    <Type color={pokemon.types[0]?.type.name}>
                      {pokemon.types[0]?.type.name.charAt(0).toLocaleUpperCase()}
                      {pokemon.types[0]?.type.name.slice(1)}
                    </Type>

                    {pokemon.types[1] && (
                      <Type color={pokemon.types[1]?.type.name}>
                        {pokemon.types[1]?.type.name.charAt(0).toLocaleUpperCase()}
                        {pokemon.types[1]?.type.name.slice(1)}
                      </Type>
                    )}
                  </PokemonTypes>
                </PokemonBox>
              ))
            ) : (
              <NotFound>Pokemons not found</NotFound>
            )}
          </PokemonListWrapper>
        )}
      </PokemonsWrapper>
    </GradientBackground>
  );
};

export default PokemonList;
