import { FC, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useActions, useAppSelector } from 'src/store/hooks';
import { Pokemon } from 'src/models/models';
import PokemonCards from 'src/components/PokemonCards/PokemonCards';
import Loader from 'src/components/Loader/Loader';
import { correctPokemonName } from 'src/helpers/functions';
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

const PokemonList: FC = () => {
  const { dex, isLoading } = useAppSelector((state) => state.pokemonsReducer);
  const { getTypesEffectivity } = useActions();
  const [searchParams] = useSearchParams();
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    getTypesEffectivity({ currentPokemon: currentPokemon });
  }, [currentPokemon]);

  const showPokemonCard = (pokemonSpecies: Pokemon) => {
    setCurrentPokemon(pokemonSpecies);
  };

  const changePageAnimation = () => {
    const animatedClass = document?.getElementById('pokemonBox')?.className.toString();

    if (animatedClass) {
      const animatedClasses = document.getElementsByClassName(animatedClass);
      for (let index = 0; index < animatedClasses?.length; index++) {
        setTimeout(
          (function (index) {
            return function () {
              animatedClasses
                ?.item(index)
                ?.animate(
                  {
                    opacity: [0, 1],
                    transform: [`translateX(150%)`, `translateX(0)`]
                  },
                  {
                    duration: animatedClasses.length * 100 + 300,
                    easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
                    fill: 'forwards'
                  }
                )
            };
          })(index),
          index * 100
        );
      }
    }
  };

  useEffect(() => {
    changePageAnimation();
  }, [isLoading]);

  return (
    <GradientBackground>
      <PokemonsWrapper>
        {currentPokemon && window.innerWidth > 768 ? (
          <PokemonCards currentPokemon={currentPokemon} />
        ) : (
          <div></div>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <PokemonListWrapper id="pokeList">
            {dex?.pokemonSpeciesList.length !== 0 ? (
              dex?.pokemonSpeciesList.map((pokemon) => (
                <PokemonBox
                  id={`pokemonBox`}
                  onClick={() => showPokemonCard(pokemon)}
                  key={pokemon.id}>
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

                    <div>{correctPokemonName(pokemon)}</div>
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
              <NotFound>
                Pokemons inclides &rdquo;{searchParams.get('search')}&rdquo; in name not found. Try
                to found in another Pokedex.
              </NotFound>
            )}
          </PokemonListWrapper>
        )}
      </PokemonsWrapper>
    </GradientBackground>
  );
};

export default PokemonList;
