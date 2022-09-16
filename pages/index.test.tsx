import { pokemonMockList } from 'services/pokemon/__mocks__/pokemon.mock';
import * as PokemonService from 'services/pokemon/pokemon.service';

import { getStaticProps } from './index.page';

describe('Home Page', () => {
  describe('getStaticProps', () => {
    test('fetches a pokemon', async () => {
      const mockFetchPokemonList = jest
        .spyOn(PokemonService, 'fetchPokemonList')
        .mockResolvedValue(pokemonMockList);

      await getStaticProps();

      expect(mockFetchPokemonList).toHaveBeenCalled();
    });
  });
});
