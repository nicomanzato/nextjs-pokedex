import { pokemonMockList } from 'services/pokemon/__mocks__/pokemon.mock';
import GlobalStyles from 'styles/styles.component';

import Home from './index.page';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomePage = () => (
  <>
    <Home pokemonList={pokemonMockList} />
    <GlobalStyles />
  </>
);
