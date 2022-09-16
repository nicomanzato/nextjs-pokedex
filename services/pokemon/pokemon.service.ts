import type { DetailedPokemon, Pokemon } from 'models/pokemon';
import { makeDetailedPokemon, makePokemon } from 'models/pokemon';
import type { PokemonSpecies } from 'pokedex-promise-v2';
import Pokedex from 'pokedex-promise-v2';

export const pokedex = new Pokedex({
  timeout: 30000,
});

/**
 * @param {number} [limit] - Maximum number of results expected.
 * @param {offset} [offset] -
 */
export const fetchPokemonList = async (
  limit = 50,
  offset = 0
): Promise<Pokemon[]> => {
  const parsedList = await pokedex.getPokemonsList({ limit, offset });

  const pokemonList = (await Promise.all(
    parsedList.results.map((pokemon) => pokedex.getPokemonByName(pokemon.name))
  )) as unknown as Pokemon[];

  const species = (await Promise.all(
    pokemonList.map((pokemon: Pokemon) =>
      pokedex.getPokemonSpeciesByName(pokemon.name)
    )
  )) as unknown as PokemonSpecies[];

  return pokemonList.map((pokemon: Pokemon, index: number) =>
    makePokemon({
      ...pokemon,
      habitat: species[index].habitat || undefined,
    })
  );
};

/**
 * @param {number} [limit] - Maximum number of results expected.
 */
export const fetchPokemonNameList = async (
  limit = 50,
  offset = 0
): Promise<string[]> => {
  const parsedList = await pokedex.getPokemonsList({ limit, offset });
  return parsedList.results.map((pokemon: any) => pokemon.name);
};

/**
 * @param {string} [name] - Pokemon's name.
 */
export const fetchPokemon = async (name: string): Promise<DetailedPokemon> => {
  const pokemon = (await pokedex.getPokemonByName(name)) as Pokedex.Pokemon;
  const moves = await Promise.all(
    pokemon.moves.map((move) => pokedex.getMoveByName(move.move.name))
  );

  return makeDetailedPokemon({ ...pokemon, moves });
};

export const fetchPokemonDescription = async (
  name: string
): Promise<string> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const parsedResponse = await response.json();

  const { flavor_text: description } = parsedResponse.flavor_text_entries[0];

  return description;
};
