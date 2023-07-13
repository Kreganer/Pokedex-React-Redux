import { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'src/store/hooks';
import { useSearchParams } from 'react-router-dom';
import CustomInput from 'src/components/UI/CustomInput/CustomInput';
import useDebounce from 'src/components/hooks/useDebounce';
import Pokeball from 'src/icons';
import {
  LeftSideWrapper,
  PokemonsCount,
  RightSideWrapper,
  TopBarTitle,
  TopBarWrapper
} from './style';

const TopBar: FC = () => {
  const checkSearchParams = () => {
    if (searchParams.get('search')) {
      return searchParams.get('search')
    } else {
      return ''
    }
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(() => checkSearchParams());
  const [debouncedValue] = useDebounce(searchValue, 1000);
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  useEffect(() => {
    if (debouncedValue && debouncedValue.length >= 2) {
      searchParams.set('search', debouncedValue);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  }, [debouncedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchValue(event.target.value);
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
          title="The search will start after entering 2 characters"
          placeholder="Search (2 characters requaired)"
          onChange={(event) => {
            handleChange(event);
          }}
          value={searchValue}
        />

        <p>By Number</p>
      </RightSideWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
