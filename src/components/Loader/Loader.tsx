import { FC } from 'react';
import Pokeball from 'src/icons';
import { LoaderWrapper, LoadingImage } from './styles';

const Loader: FC = () => (
  <LoaderWrapper>
    <LoadingImage src={Pokeball} alt="Loading..." />
  </LoaderWrapper>
);

export { Loader };
