import { FC, useEffect } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import BottomBar from '../BottomBar/BottomBar';
import PokemonList from '../PokemonList/PokemonList';

const Layout: FC = () => {
  const { limit, dexName, dex } = useAppSelector((state) => state.pokemonsReducer);
  const { getPokemons } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    checkSearchParams();
    getPokemons({
      limit: Number(searchParams.get('limit')) ?? 10,
      currentPage: Number(searchParams.get('page')) ?? 1,
      dexName: dexName,
      dex: dex
    });
  }, [dexName, searchParams, limit]);

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
