import { FC } from 'react';
import { useAppSelector } from 'src/store/hooks';
import { useSearchParams } from 'react-router-dom';
import Pokeball from 'src/icons';
import CustomInput from '../UI/CustomInput/CustomInput';
import {
  LeftSideWrapper,
  PokemonsCount,
  RightSideWrapper,
  TopBarTitle,
  TopBarWrapper
} from './style';

const TopBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  const searchPokemonBy = (searchValue: string) => {
    searchParams.set('search', searchValue);
    if (searchValue.length >= 2 || searchParams.get('search') === '') {
      setSearchParams(searchParams);
    }
  };

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
          <img style={{ width: '30px' }} src={Pokeball} alt="coloredPokeball" />

          <p>{dex?.pokemonList.pokemon_entries.length}</p>
        </PokemonsCount>
      </LeftSideWrapper>

      <RightSideWrapper>
        <CustomInput
          placeholder="Search pokemon by name"
          onChange={(e) => searchPokemonBy(e.target.value)}
        />

        <p>By Number</p>
      </RightSideWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
