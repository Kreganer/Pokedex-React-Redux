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
    checkPage();
    getPokemons({
      limit: limit,
      currentPage: Number(searchParams.get('page')) ?? 1,
      dexName: dexName,
      dex: dex
    });
  }, [dexName, searchParams, limit]);

  const checkPage = () => {
    if (searchParams.get('page') === null) {
      searchParams.set('page', '1');
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
