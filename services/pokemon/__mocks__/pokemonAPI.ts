import type {
  Move,
  NamedAPIResourceList,
  Pokemon,
  PokemonSpecies,
} from 'pokedex-promise-v2';

import MoveAPIMock from './moveAPI.mock.json';
import PokemonAPIMock from './pokemonAPI.mock.json';
import PokemonListAPIMock from './pokemonListAPI.mock.json';
import PokemonSpeciesAPIMock from './speciesAPI.mock.json';

export const pokemonAPIMock: Pokemon = PokemonAPIMock;
export const pokemonAPIListMock: NamedAPIResourceList = PokemonListAPIMock;
export const moveAPIMock: Move = MoveAPIMock;
export const speciesAPIMock: PokemonSpecies = PokemonSpeciesAPIMock;
