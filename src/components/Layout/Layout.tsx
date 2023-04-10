import { FC, useEffect } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import TopBar from 'src/components/TopBar/TopBar';
import PokemonList from 'src/components/PokemonList/PokemonList';
import BottomBar from 'src/components/BottomBar/BottomBar';

const Layout: FC = () => {
  const { dexName, dex } = useAppSelector((state) => state.pokemonsReducer);
  const { getPokemons } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    checkSearchParams();
    getPokemons({
      limit: Number(searchParams.get('limit')) ?? 10,
      currentPage: Number(searchParams.get('page')) ?? 1,
      search: searchParams.get('search') ?? '',
      dexName: dexName,
      dex: dex
    });
  }, [dexName, searchParams]);

  const checkSearchParams = () => {
    if (searchParams.get('page') === null || searchParams.get('limit') === null) {
      searchParams.set('page', '1');
      searchParams.set('limit', '10');
      setSearchParams(searchParams);
    } else {
      return;
    }
  };

  return (
    <div>
      <TopBar />

      <PokemonList />

      <BottomBar />
    </div>
  );
};

export default Layout;
