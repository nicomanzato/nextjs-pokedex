import HomeTemplate from 'components/templates/index/index.component';
import type { Pokemon } from 'models/pokemon';
import { fetchPokemonList } from 'services/pokemon/pokemon.service';

export const POKEMON_QUANTITY = 50;

export async function getStaticProps() {
  const pokemonList = await fetchPokemonList(POKEMON_QUANTITY);

  /*
  const urls = pokemonList.map(
    (pokemon) => `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
  );

  const species = await Promise.all(urls.map((url) => fetch(url)));
  const parsedSpecies = await Promise.all(
    species.map((specie) => specie.json())
  );

  const fallback: { [key: string]: string } = {};


  urls.forEach((url, index) => {
    fallback[url] = parsedSpecies[index].flavor_text_entries[0].flavor_text;
  });
*/
  return {
    props: {
      pokemonList,
    },
  };
}

interface HomeProps {
  pokemonList: Pokemon[];
}

export default function Home({ ...props }: HomeProps) {
  return <HomeTemplate {...props} />;
}
