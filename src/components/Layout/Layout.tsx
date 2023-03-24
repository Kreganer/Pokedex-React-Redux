import { FC, useEffect, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import BottomBar from '../BottomBar/BottomBar';
import PokemonList from '../PokemonList/PokemonList';
import { useActions, useAppSelector } from '../../store/hooks';

const Layout: FC = () => {
  const [limit, setLimit] = useState(20);
  const [page, setOffset] = useState(0);
  const [dexName, setDexName] = useState('national');
  const { getDex, getPokemons } = useActions();
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  useEffect(() => {
    getDex({ dexName: dexName });
    getPokemons({ limit: limit, page: page, dexName: dexName });
    getPagesCount();
  }, [dexName, page, limit]);

  const getPagesCount = () => {
    const dexLength = dex?.pokemon_entries.length;
    if (dexLength) {
      const pagesCount = Math.floor(dexLength / limit);
    }
    return 'Ошибка получения количества страниц';
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
