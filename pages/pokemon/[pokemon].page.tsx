import { PageLayout } from 'components/atoms/page-layout/page-layout.component';
import { PokemonMoves } from 'components/atoms/pokemon-moves/pokemon-moves.component';
import { PokemonType } from 'components/atoms/pokemon-type/pokemon-type';
import type { DetailedPokemon } from 'models/pokemon';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { POKEMON_QUANTITY } from 'pages/index.page';
import { useMemo } from 'react';
import {
  fetchPokemon,
  fetchPokemonDescription,
  fetchPokemonNameList,
} from 'services/pokemon/pokemon.service';

import {
  Header,
  Main,
  PokemonMoveContainer,
  PokemonTypeContainer,
  PokemonTypesContainer,
  SummaryContainer,
  Title,
} from './[pokemon].styles';

export async function getStaticPaths() {
  const pokemonList = await fetchPokemonNameList(POKEMON_QUANTITY);

  return {
    paths: pokemonList.map((pokemon) => ({ params: { pokemon } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: any): Promise<{ props: PokemonDetailProps }> {
  const pokemonName = params.pokemon;
  const pokemon = await fetchPokemon(pokemonName);

  const description = await fetchPokemonDescription(pokemonName);

  return {
    props: {
      pokemon,
      description,
    },
  };
}

interface PokemonDetailProps {
  pokemon: DetailedPokemon;
  description: string;
}

export default function PokemonDetail({
  pokemon,
  description,
}: PokemonDetailProps) {
  const PokemonTypes = useMemo(
    () =>
      pokemon.types.map((type) => (
        <PokemonTypeContainer key={type.type.name}>
          <PokemonType type={type} />
        </PokemonTypeContainer>
      )),
    [pokemon]
  );

  return (
    <PageLayout>
      <Head>
        <title>{pokemon.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main type={pokemon.types[0].type.name}>
        <Header>
          <div>
            <Link href={'/'}>Go back</Link>
            <Title>{pokemon.name}</Title>
            <PokemonTypesContainer>{PokemonTypes}</PokemonTypesContainer>
          </div>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={300}
            height={300}
          />
        </Header>
        <SummaryContainer>
          <p>{description}</p>
          <PokemonMoveContainer>
            <PokemonMoves moves={pokemon.moves} />
          </PokemonMoveContainer>
        </SummaryContainer>
      </Main>
    </PageLayout>
  );
}
