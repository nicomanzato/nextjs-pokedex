export interface Pokemon {
  types: Type[];
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  stats?: Stat;
  species?: Species;
  moves?: Move[];
  habitat: Habitat;
}

export interface Habitat {
  name: string;
}

export interface DetailedPokemon {
  types: Type[];
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  stats?: Stat;
  species?: Species[];
  moves: DetailedMove[];
}

export interface Type {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}

export type PokemonType =
  | 'grass'
  | 'fire'
  | 'water'
  | 'poison'
  | 'electric'
  | 'flying'
  | 'ground'
  | 'fairy'
  | 'normal'
  | 'bug'
  | 'psychic'
  | 'rock'
  | 'ice'
  | 'dragon';

export interface Stat {
  name: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface DetailedSpecies {
  habitat: {
    name: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface DetailedMove {
  power: number;
  pp: number;
  accuracy: number;
  priority: number;
  name: string;
  damage_class: {
    name: string;
  };
  type: {
    name: string;
  };
}

export const makeDetailedMove = (move: any): DetailedMove => {
  const newMove: DetailedMove = {
    power: move.power,
    pp: move.pp,
    accuracy: move.accuracy,
    priority: move.priority,
    name: move.name,
    damage_class: move.damage_class,
    type: move.type,
  };

  return newMove;
};

export const makePokemon = (pokemon: Partial<Pokemon>): Pokemon => {
  const defaultValue: Pokemon = {
    sprites: {
      front_default: pokemon.sprites ? pokemon.sprites.front_default : '',
    },
    name: pokemon.name ? pokemon.name : '',
    types: pokemon.types ? pokemon.types : [],
    id: pokemon.id ? pokemon.id : -1,
    species: pokemon.species ? pokemon.species : { name: '', url: '' },
    habitat: pokemon.habitat ? { name: pokemon.habitat.name } : { name: '' },
  };

  return defaultValue;
};

export const makeDetailedPokemon = (pokemon: any): DetailedPokemon => {
  const newPokemon: DetailedPokemon = {
    sprites: { front_default: pokemon.sprites.front_default },
    name: pokemon.name,
    types: pokemon.types,
    id: pokemon.id,
    species: pokemon.species,
    moves: pokemon.moves.map(makeDetailedMove),
  };

  return newPokemon;
};
