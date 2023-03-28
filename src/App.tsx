import { FC } from 'react';
import Layout from './components/Layout/Layout';
import { AppWrapper } from './style';

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
