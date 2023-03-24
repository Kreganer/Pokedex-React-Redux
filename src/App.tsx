import { FC } from 'react';
// import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { AppWrapper } from './style';
// import { useActions, useAppSelector } from './store/hooks';

const App: FC = () => {
  return (
    <AppWrapper>
      <Layout />
      {/* <Routes>
        <Route element={<Layout />}>
          <Route path="/Pokédex" />
        </Route>
      </Routes> */}
    </AppWrapper>
  );
};

export default App;
