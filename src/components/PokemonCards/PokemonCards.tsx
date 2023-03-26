import { FC } from 'react';
import { IPokemonCards } from '../../models/models';
import {
  BaseStats,
  CurrentPokemonInfo,
  PokemonCard,
  PokemonCardBottom,
  PokemonCardImage,
  PokemonCardImageShiny,
  PokemonCardTypesWrapper,
  PokemonCardUp,
  PokemonImagesWrapper,
  StatsContainer,
  StatsWrapper,
  Type
} from './style';

const PokemonCards: FC<IPokemonCards> = ({ currentPokemon }) => {
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

        {currentPokemon?.sprites.other.home.front_shiny === null ? (
          <PokemonImagesWrapper>
            {currentPokemon.sprites.other['official-artwork'].front_shiny === null ? (
              <img
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
              <img
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
        <StatsWrapper>
          <StatsContainer>
            <p>Types:</p>

            <p>Height:</p>

            <p>Weight:</p>
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

            <p>{currentPokemon?.height}0 cm</p>

            <p>{currentPokemon?.weight} lbs</p>
          </StatsContainer>
        </StatsWrapper>

        <BaseStats>
          <StatsContainer>
            {currentPokemon?.stats?.map((stat, index) => (
              <p key={index}>
                {stat.stat.name[0].toLocaleUpperCase()}
                {stat.stat.name.slice(1)}:
              </p>
            ))}
          </StatsContainer>

          <StatsContainer>
            {currentPokemon?.stats?.map((stat, index) => (
              <p key={index}>{stat.base_stat}</p>
            ))}
          </StatsContainer>
        </BaseStats>
      </PokemonCardBottom>
    </PokemonCard>
  );
};

export default PokemonCards;
