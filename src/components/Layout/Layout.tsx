import { FC, useEffect } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import BottomBar from '../BottomBar/BottomBar';
import PokemonList from '../PokemonList/PokemonList';

const Layout: FC = () => {
  const { limit, dexName } = useAppSelector((state) => state.pokemonsReducer);
  const { getDex, getPokemons } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    checkPage();
    getDex({
      limit: limit,
      currentPage: Number(searchParams.get('page')) - 1 ?? 1,
      dexName: dexName
    });
    getPokemons({
      limit: limit,
      currentPage: Number(searchParams.get('page')) ?? 1,
      dexName: dexName
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
