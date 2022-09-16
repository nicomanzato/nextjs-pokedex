import type { Pokemon } from 'models/pokemon';

export const pokemonMockList: Pokemon[] = [
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 1,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 2,
    species: {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 3,
    species: {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    name: 'charmander',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    id: 4,
    species: {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
    },
    habitat: {
      name: 'mountain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    name: 'charmeleon',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    id: 5,
    species: {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/5/',
    },
    habitat: {
      name: 'mountain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    name: 'charizard',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 6,
    species: {
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
    },
    habitat: {
      name: 'mountain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    name: 'squirtle',
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    id: 7,
    species: {
      name: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
    },
    habitat: {
      name: 'waters-edge',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    name: 'wartortle',
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    id: 8,
    species: {
      name: 'wartortle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/8/',
    },
    habitat: {
      name: 'waters-edge',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    name: 'blastoise',
    types: [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
    ],
    id: 9,
    species: {
      name: 'blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon-species/9/',
    },
    habitat: {
      name: 'waters-edge',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    },
    name: 'caterpie',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    id: 10,
    species: {
      name: 'caterpie',
      url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
    name: 'metapod',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    id: 11,
    species: {
      name: 'metapod',
      url: 'https://pokeapi.co/api/v2/pokemon-species/11/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    name: 'butterfree',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 12,
    species: {
      name: 'butterfree',
      url: 'https://pokeapi.co/api/v2/pokemon-species/12/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    },
    name: 'weedle',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 13,
    species: {
      name: 'weedle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/13/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    },
    name: 'kakuna',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 14,
    species: {
      name: 'kakuna',
      url: 'https://pokeapi.co/api/v2/pokemon-species/14/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    },
    name: 'beedrill',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 15,
    species: {
      name: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon-species/15/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    },
    name: 'pidgey',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 16,
    species: {
      name: 'pidgey',
      url: 'https://pokeapi.co/api/v2/pokemon-species/16/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    },
    name: 'pidgeotto',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 17,
    species: {
      name: 'pidgeotto',
      url: 'https://pokeapi.co/api/v2/pokemon-species/17/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    },
    name: 'pidgeot',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 18,
    species: {
      name: 'pidgeot',
      url: 'https://pokeapi.co/api/v2/pokemon-species/18/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    name: 'rattata',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    id: 19,
    species: {
      name: 'rattata',
      url: 'https://pokeapi.co/api/v2/pokemon-species/19/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    },
    name: 'raticate',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    id: 20,
    species: {
      name: 'raticate',
      url: 'https://pokeapi.co/api/v2/pokemon-species/20/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    },
    name: 'spearow',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 21,
    species: {
      name: 'spearow',
      url: 'https://pokeapi.co/api/v2/pokemon-species/21/',
    },
    habitat: {
      name: 'rough-terrain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    },
    name: 'fearow',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 22,
    species: {
      name: 'fearow',
      url: 'https://pokeapi.co/api/v2/pokemon-species/22/',
    },
    habitat: {
      name: 'rough-terrain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    },
    name: 'ekans',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 23,
    species: {
      name: 'ekans',
      url: 'https://pokeapi.co/api/v2/pokemon-species/23/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    },
    name: 'arbok',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 24,
    species: {
      name: 'arbok',
      url: 'https://pokeapi.co/api/v2/pokemon-species/24/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    name: 'pikachu',
    types: [
      {
        slot: 1,
        type: {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      },
    ],
    id: 25,
    species: {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    },
    name: 'raichu',
    types: [
      {
        slot: 1,
        type: {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      },
    ],
    id: 26,
    species: {
      name: 'raichu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/26/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    },
    name: 'sandshrew',
    types: [
      {
        slot: 1,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    id: 27,
    species: {
      name: 'sandshrew',
      url: 'https://pokeapi.co/api/v2/pokemon-species/27/',
    },
    habitat: {
      name: 'rough-terrain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    },
    name: 'sandslash',
    types: [
      {
        slot: 1,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    id: 28,
    species: {
      name: 'sandslash',
      url: 'https://pokeapi.co/api/v2/pokemon-species/28/',
    },
    habitat: {
      name: 'rough-terrain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    },
    name: 'nidoran-f',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 29,
    species: {
      name: 'nidoran-f',
      url: 'https://pokeapi.co/api/v2/pokemon-species/29/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    },
    name: 'nidorina',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 30,
    species: {
      name: 'nidorina',
      url: 'https://pokeapi.co/api/v2/pokemon-species/30/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    },
    name: 'nidoqueen',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    id: 31,
    species: {
      name: 'nidoqueen',
      url: 'https://pokeapi.co/api/v2/pokemon-species/31/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    },
    name: 'nidoran-m',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 32,
    species: {
      name: 'nidoran-m',
      url: 'https://pokeapi.co/api/v2/pokemon-species/32/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    },
    name: 'nidorino',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 33,
    species: {
      name: 'nidorino',
      url: 'https://pokeapi.co/api/v2/pokemon-species/33/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    },
    name: 'nidoking',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    id: 34,
    species: {
      name: 'nidoking',
      url: 'https://pokeapi.co/api/v2/pokemon-species/34/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    },
    name: 'clefairy',
    types: [
      {
        slot: 1,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ],
    id: 35,
    species: {
      name: 'clefairy',
      url: 'https://pokeapi.co/api/v2/pokemon-species/35/',
    },
    habitat: {
      name: 'mountain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    },
    name: 'clefable',
    types: [
      {
        slot: 1,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ],
    id: 36,
    species: {
      name: 'clefable',
      url: 'https://pokeapi.co/api/v2/pokemon-species/36/',
    },
    habitat: {
      name: 'mountain',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    },
    name: 'vulpix',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    id: 37,
    species: {
      name: 'vulpix',
      url: 'https://pokeapi.co/api/v2/pokemon-species/37/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    },
    name: 'ninetales',
    types: [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    id: 38,
    species: {
      name: 'ninetales',
      url: 'https://pokeapi.co/api/v2/pokemon-species/38/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    name: 'jigglypuff',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ],
    id: 39,
    species: {
      name: 'jigglypuff',
      url: 'https://pokeapi.co/api/v2/pokemon-species/39/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    },
    name: 'wigglytuff',
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ],
    id: 40,
    species: {
      name: 'wigglytuff',
      url: 'https://pokeapi.co/api/v2/pokemon-species/40/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    },
    name: 'zubat',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 41,
    species: {
      name: 'zubat',
      url: 'https://pokeapi.co/api/v2/pokemon-species/41/',
    },
    habitat: {
      name: 'cave',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    },
    name: 'golbat',
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    id: 42,
    species: {
      name: 'golbat',
      url: 'https://pokeapi.co/api/v2/pokemon-species/42/',
    },
    habitat: {
      name: 'cave',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    },
    name: 'oddish',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 43,
    species: {
      name: 'oddish',
      url: 'https://pokeapi.co/api/v2/pokemon-species/43/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    },
    name: 'gloom',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 44,
    species: {
      name: 'gloom',
      url: 'https://pokeapi.co/api/v2/pokemon-species/44/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    },
    name: 'vileplume',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 45,
    species: {
      name: 'vileplume',
      url: 'https://pokeapi.co/api/v2/pokemon-species/45/',
    },
    habitat: {
      name: 'grassland',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    },
    name: 'paras',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    id: 46,
    species: {
      name: 'paras',
      url: 'https://pokeapi.co/api/v2/pokemon-species/46/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    },
    name: 'parasect',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    id: 47,
    species: {
      name: 'parasect',
      url: 'https://pokeapi.co/api/v2/pokemon-species/47/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    },
    name: 'venonat',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 48,
    species: {
      name: 'venonat',
      url: 'https://pokeapi.co/api/v2/pokemon-species/48/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    },
    name: 'venomoth',
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    id: 49,
    species: {
      name: 'venomoth',
      url: 'https://pokeapi.co/api/v2/pokemon-species/49/',
    },
    habitat: {
      name: 'forest',
    },
  },
  {
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    },
    name: 'diglett',
    types: [
      {
        slot: 1,
        type: {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      },
    ],
    id: 50,
    species: {
      name: 'diglett',
      url: 'https://pokeapi.co/api/v2/pokemon-species/50/',
    },
    habitat: {
      name: 'cave',
    },
  },
];
