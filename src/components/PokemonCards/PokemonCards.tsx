import { FC, useState } from 'react';
import { IPokemonCards } from 'src/models/models';
import { useAppSelector } from 'src/store/hooks';
import { correctPokemonName } from 'src/helpers/functions';
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
  StyledButton,
  StyledSpan,
  Type,
  PokemonCardTypesEffectivityWrapper,
  StatsNameContainer,
  StatsValueContainer
} from './style';

const PokemonCards: FC<IPokemonCards> = ({ currentPokemon }) => {
  const { typesEffectivity } = useAppSelector((state) => state.pokemonsReducer);
  const [isStats, setIsStats] = useState(true);

  const handleChangeIsStats = () => {
    setIsStats(!isStats);
  };

  return (
    <PokemonCard>
      <PokemonCardUp>
        <CurrentPokemonInfo>
          <p>No. {currentPokemon.id}</p>

          <p>{correctPokemonName(currentPokemon)}</p>
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
            <StatsNameContainer>
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
            </StatsNameContainer>

            <StatsValueContainer>
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
            </StatsValueContainer>
          </Stats>
        ) : (
          <Stats>
            <StatsNameContainer>
              <p>Very weak to:</p>

              <p>Weak to:</p>

              <p>Resistant to:</p>

              <p>Immune to:</p>
            </StatsNameContainer>

            <StatsValueContainer>
              <PokemonCardTypesEffectivityWrapper>
                {typesEffectivity?.map((type, index) => {
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
                {typesEffectivity?.map((type, index) => {
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
                {typesEffectivity?.map((type, index) => {
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
                {typesEffectivity?.map((type, index) => {
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
            </StatsValueContainer>
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
