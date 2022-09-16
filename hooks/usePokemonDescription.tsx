import { fetcher } from 'services/fetcher';
import useSWR from 'swr';

export const usePokemonDescription = (name: string, fetch = fetcher) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    fetch
  );

  if (error) return <>failed to load</>;
  if (!data) return <>loading...</>;

  const { flavor_text: description } = data.flavor_text_entries[0];
  return <>{description}</>;
};
