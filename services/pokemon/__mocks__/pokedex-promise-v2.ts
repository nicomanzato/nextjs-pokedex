/* eslint-disable max-classes-per-file */
import {
  moveAPIMock,
  pokemonAPIListMock,
  pokemonAPIMock,
  speciesAPIMock,
} from './pokemonAPI';

export class MockPokedex {
  async getPokemonsList() {
    return { results: pokemonAPIListMock };
  }

  async getPokemonSpeciesByName(_name: string) {
    return speciesAPIMock;
  }

  async getPokemonByName(_name: string) {
    return pokemonAPIMock;
  }

  async getMoveByName(_name: string) {
    return moveAPIMock;
  }
}

export class MockErrorPokedex {
  async getPokemonsList() {
    throw new Error('');
  }

  async getPokemonSpeciesByName(_name: string) {
    throw new Error('');
  }

  async getPokemonByName(_name: string) {
    throw new Error('');
  }

  async getMoveByName(_name: string) {
    throw new Error('');
  }
}

export default MockPokedex;
