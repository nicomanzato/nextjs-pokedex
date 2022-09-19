import type { Pokemon } from 'models/pokemon';
import { pokemonMockList } from 'services/pokemon/__mocks__/pokemon.mock';
import GlobalStyles from 'styles/styles.component';

import { PokemonListElement } from './pokemon-list-element';

const config = {
  title: 'Molecules/PokemonListElement',
  component: PokemonListElement,
  argTypes: {
    width: {
      control: { type: 'range', min: 325, max: 700 },
    },
  },
};

export const Story = ({
  width,
  element,
}: {
  width: number;
  element: Pokemon;
}) => (
  <div style={{ width: width === 700 ? '100%' : width }}>
    <PokemonListElement element={element} />
    <GlobalStyles />
  </div>
);

Story.args = {
  width: 50,
  element: pokemonMockList[0],
};

export default config;
