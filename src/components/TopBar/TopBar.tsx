import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import {
  LeftSideWrapper,
  PokemonsCount,
  RightSideWrapper,
  TopBarTitle,
  TopBarWrapper
} from './style';

const TopBar: FC = () => {
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  return (
    <TopBarWrapper>
      <LeftSideWrapper>
        <TopBarTitle>
          {dex?.pokemonList.name?.charAt(0).toLocaleUpperCase()}
          {dex?.pokemonList.name?.slice(1)} Pokédex
        </TopBarTitle>

        <PokemonsCount>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
            alt="coloredPokeball"
          />

          <p>{dex?.pokemonList.pokemon_entries.length}</p>
        </PokemonsCount>
      </LeftSideWrapper>

      <RightSideWrapper>
        <p>By Number</p>
      </RightSideWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
