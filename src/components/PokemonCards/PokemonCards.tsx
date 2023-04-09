import { FC, useState, useEffect } from 'react';
import { IPokemonCards } from 'src/models/models';
import { useActions, useAppSelector } from 'src/store/hooks';
import {
  Stats,
  CurrentPokemonInfo,
  PokemonCard,
  PokemonCardBottom,
  PokemonCardImage,
  PokemonCardImageShiny,
  PokemonCardTypesWrapper,
  PokemonCardUp,
  PokemonImagesWrapper,
  StatsContainer,
  StyledButton,
  StyledSpan,
  Type,
  PokemonCardTypesEffectivityWrapper
} from './style';
import { effectForTypes } from 'src/helpers/constants';

const PokemonCards: FC<IPokemonCards> = ({ currentPokemon }) => {
  const [isStats, setIsStats] = useState(true);
  const { getTypesEffectivity } = useActions();
  const { typesEffectivity } = useAppSelector((state) => state.pokemonsReducer);
  const effectivenessAgainstPokemon = effectForTypes;

  useEffect(() => {
    setIsStats(true);
  }, [currentPokemon]);

  useEffect(() => {
    getTypesEffectivity({ currentPokemon: currentPokemon });
    resetEffectivity();
    calculateEffrctivity();
  }, [isStats]);

  const handleChangeIsStats = () => {
    setIsStats(!isStats);
  };

  const calculateEffrctivity = () => {
    typesEffectivity.forEach((effect) => {
      effect.damage_relations.double_damage_from?.forEach((element) => {
        for (let index = 0; index < effectivenessAgainstPokemon.length; index++) {
          if (effectivenessAgainstPokemon[index].name === element.name) {
            effectivenessAgainstPokemon[index].value *= 2;

            return;
          }
        }
      });
      effect.damage_relations.half_damage_from?.forEach((element) => {
        for (let index = 0; index < effectivenessAgainstPokemon.length; index++) {
          if (effectivenessAgainstPokemon[index].name === element.name) {
            effectivenessAgainstPokemon[index].value *= 0.5;

            return;
          }
        }
      });
      effect.damage_relations.no_damage_from?.forEach((element) => {
        for (let index = 0; index < effectivenessAgainstPokemon.length; index++) {
          if (effectivenessAgainstPokemon[index].name === element.name) {
            effectivenessAgainstPokemon[index].value *= 0;

            return;
          }
        }
      });
    });

    return effectivenessAgainstPokemon;
  };

  const resetEffectivity = () => {
    effectivenessAgainstPokemon.forEach((effect) => {
      effect.value = 1;
    });
  };

  return (
    <PokemonCard>
      <PokemonCardUp>
        <CurrentPokemonInfo>
          <p>No. {currentPokemon.id}</p>

          <p>
            {currentPokemon?.name?.charAt(0).toLocaleUpperCase()}

            {currentPokemon?.name?.slice(1)}
          </p>
        </CurrentPokemonInfo>
        <StyledSpan>Hover over sprite to see ✨shiny sprite✨</StyledSpan>
        {currentPokemon?.sprites.other.home.front_shiny === null ? (
          <PokemonImagesWrapper>
            {currentPokemon.sprites.other['official-artwork'].front_shiny === null ? (
              <PokemonCardImageShiny
                style={{ width: '200px' }}
                src="https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0201_027_uk_n_00000000_f_r.png"
                alt="Shiny pokemon image"
              />
            ) : (
              <PokemonCardImageShiny
                src={currentPokemon.sprites.other['official-artwork'].front_shiny}
                alt="Shiny pokemon image"
              />
            )}

            <PokemonCardImage
              src={currentPokemon.sprites.other['official-artwork'].front_default}
              alt="Pokemon image"
            />
          </PokemonImagesWrapper>
        ) : (
          <PokemonImagesWrapper>
            {currentPokemon?.sprites.other.home.front_shiny === null ? (
              <PokemonCardImageShiny
                src="https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0201_027_uk_n_00000000_f_r.png"
                alt="Shiny pokemon image"
              />
            ) : (
              <PokemonCardImageShiny
                src={currentPokemon?.sprites.other.home.front_shiny}
                alt="Shiny pokemon image"
              />
            )}

            <PokemonCardImage
              src={currentPokemon?.sprites.other.home.front_default}
              alt="Pokemon image"
            />
          </PokemonImagesWrapper>
        )}
      </PokemonCardUp>

      <PokemonCardBottom>
        {isStats ? (
          <Stats>
            <StatsContainer>
              <p>Types:</p>

              <p>Height:</p>

              <p>Weight:</p>

              {currentPokemon?.stats?.map((stat, index) => (
                <span key={index}>
                  {stat.stat.name
                    .split('-')
                    .map((namesPart) => {
                      const pokemonStat =
                        namesPart.charAt(0).toLocaleUpperCase() + namesPart.slice(1);

                      return pokemonStat;
                    })
                    .join(' ')}
                </span>
              ))}
            </StatsContainer>

            <StatsContainer>
              <PokemonCardTypesWrapper>
                <Type color={currentPokemon?.types[0]?.type.name}>
                  {currentPokemon?.types[0]?.type.name.charAt(0).toLocaleUpperCase()}
                  {currentPokemon?.types[0]?.type.name.slice(1)}
                </Type>

                {currentPokemon?.types[1] && (
                  <Type color={currentPokemon.types[1]?.type.name}>
                    {currentPokemon.types[1]?.type.name.charAt(0).toLocaleUpperCase()}
                    {currentPokemon.types[1]?.type.name.slice(1)}
                  </Type>
                )}
              </PokemonCardTypesWrapper>
              <p>{(Number(currentPokemon?.height) / 10).toFixed(1)} m</p>
              <p>{(Number(currentPokemon?.weight) / 10).toFixed(1)} kg</p>3
              {currentPokemon?.stats?.map((stat, index) => (
                <p key={index}>{stat.base_stat}</p>
              ))}
            </StatsContainer>
          </Stats>
        ) : (
          <Stats>
            <StatsContainer>
              <p>Very weak to:</p>

              <p>Weak to:</p>

              <p>Resistant to:</p>

              <p>Immune to:</p>
            </StatsContainer>

            <StatsContainer>
              <PokemonCardTypesEffectivityWrapper>
                {effectForTypes.map((type, index) => {
                  if (type.value === 4) {
                    return (
                      <Type key={index} color={type.name}>
                        {type.name.charAt(0).toLocaleUpperCase()}
                        {type.name.slice(1)}
                        {' x'}
                        {type.value}{' '}
                      </Type>
                    );
                  }
                })}
              </PokemonCardTypesEffectivityWrapper>

              <PokemonCardTypesEffectivityWrapper>
                {effectForTypes.map((type, index) => {
                  if (type.value === 2) {
                    return (
                      <Type key={index} color={type.name}>
                        {type.name.charAt(0).toLocaleUpperCase()}
                        {type.name.slice(1)}
                        {' x'}
                        {type.value}{' '}
                      </Type>
                    );
                  }
                })}
              </PokemonCardTypesEffectivityWrapper>

              <PokemonCardTypesEffectivityWrapper>
                {effectForTypes.map((type, index) => {
                  if (type.value <= 0.5 && type.value > 0) {
                    return (
                      <Type key={index} color={type.name}>
                        {type.name.charAt(0).toLocaleUpperCase()}
                        {type.name.slice(1)}
                        {' x'}
                        {type.value}{' '}
                      </Type>
                    );
                  }
                })}
              </PokemonCardTypesEffectivityWrapper>

              <PokemonCardTypesEffectivityWrapper>
                {effectForTypes.map((type, index) => {
                  if (type.value <= 0) {
                    return (
                      <Type key={index} color={type.name}>
                        {type.name.charAt(0).toLocaleUpperCase()}
                        {type.name.slice(1)}
                        {' x'}
                        {type.value}{' '}
                      </Type>
                    );
                  }
                })}
              </PokemonCardTypesEffectivityWrapper>
            </StatsContainer>
          </Stats>
        )}
      </PokemonCardBottom>
      <StyledButton type="button" onClick={handleChangeIsStats}>
        Click to view the effectiveness of the types
      </StyledButton>
    </PokemonCard>
  );
};

export default PokemonCards;
