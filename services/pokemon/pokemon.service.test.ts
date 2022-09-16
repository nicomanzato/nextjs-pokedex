import { pokemonAPIListMock, pokemonAPIMock } from './__mocks__/pokemonAPI';
import {
  fetchPokemon,
  fetchPokemonDescription,
  fetchPokemonList,
  fetchPokemonNameList,
  pokedex,
} from './pokemon.service';

describe('Pokemon Service', () => {
  describe('fetchPokemonNameList', () => {
    test('fetches a Pokemon Name List', async () => {
      jest
        .spyOn(pokedex, 'getPokemonsList')
        .mockResolvedValue(pokemonAPIListMock);
      const results = await fetchPokemonNameList(151);
      expect(results.length).toEqual(151);
    });

    test('fetches a Pokemon Name List with an error', async () => {
      jest.spyOn(pokedex, 'getPokemonsList').mockRejectedValue('Error');

      try {
        await fetchPokemonNameList(151);
      } catch (error) {
        expect(error).toBe('Error');
      }

      expect.assertions(1);
    });
  });

  describe('fetchPokemonList', () => {
    test('fetches a list of pokemon', async () => {
      jest
        .spyOn(pokedex, 'getPokemonsList')
        .mockResolvedValue(pokemonAPIListMock);
      const results = await fetchPokemonList(151);
      expect(results.length).toEqual(151);
    });

    test('handles errors while getting a Pokemon Name List', async () => {
      jest.spyOn(pokedex, 'getPokemonsList').mockRejectedValue('Error');

      try {
        await fetchPokemonList(151);
      } catch (error) {
        expect(error).toBe('Error');
      }

      expect.assertions(1);
    });

    test('handles pokemon detail errors while getting a Pokemon Name List', async () => {
      jest
        .spyOn(pokedex, 'getPokemonsList')
        .mockResolvedValue(pokemonAPIListMock);
      jest.spyOn(pokedex, 'getPokemonByName').mockRejectedValue('Error');

      try {
        await fetchPokemonList(151);
      } catch (error) {
        expect(error).toBe('Error');
      }

      expect.assertions(1);
    });

    test('handles species errors while getting a Pokemon Name List', async () => {
      jest
        .spyOn(pokedex, 'getPokemonsList')
        .mockResolvedValue(pokemonAPIListMock);
      jest.spyOn(pokedex, 'getPokemonSpeciesByName').mockRejectedValue('Error');

      try {
        await fetchPokemonList(151);
      } catch (error) {
        expect(error).toBe('Error');
      }

      expect.assertions(1);
    });
  });

  describe('fetchPokemon', () => {
    test('fetches a pokemon', async () => {
      jest.spyOn(pokedex, 'getPokemonByName').mockResolvedValue(pokemonAPIMock);
      const result = await fetchPokemon('aPokemon');
      expect(result).toBeTruthy();
    });
  });

  describe('fetchPokemonDescription', () => {
    test('fetches a pokemon', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          flavor_text_entries: [{ flavor_text: 'a description' }],
        }),
      });
      const result = await fetchPokemonDescription('aPokemon');
      expect(result).toEqual('a description');
    });
  });
});
