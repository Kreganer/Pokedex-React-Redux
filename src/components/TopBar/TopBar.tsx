import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Pokeball } from '../../icons/index';
import {
  LeftSideWrapper,
  PokemonsCount,
  RightSideWrapper,
  TopBarTitle,
  TopBarWrapper
} from './style';

const TopBar: FC = () => {
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  const convertDexName = () => {
    const rightName = dex?.pokemonList.name?.split('-').map((word) => {
      return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    });

    return rightName?.join(' ');
  };

  return (
    <TopBarWrapper>
      <LeftSideWrapper>
        <TopBarTitle>{convertDexName()} Pokédex</TopBarTitle>

        <PokemonsCount>
          <img src={Pokeball} alt="coloredPokeball" />

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
