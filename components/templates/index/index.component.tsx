import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/atoms/input/input.component';
import { PageLayout } from 'components/atoms/page-layout/page-layout.component';
import { PokemonList } from 'components/organisms/pokemon-list/pokemon-list.component';
import type { Pokemon } from 'models/pokemon';
import Head from 'next/head';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Main, Title } from './index.styles';

const validationSchema = yup.object({
  keyword: yup.string().min(4, ''),
});

interface HomeTemplateProps {
  pokemonList: Pokemon[];
}

export default function HomeTemplate({ pokemonList }: HomeTemplateProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      keyword: '',
    },
  });

  const { keyword } = watch();

  const filteredPokemon = useMemo(
    () =>
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    [keyword, pokemonList]
  );

  return (
    <PageLayout>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main>
        <Title>Pokedex</Title>
        <Input
          register={register}
          placeholder="Search here"
          errors={errors}
          name="keyword"
          type={'text'}
        />
        <PokemonList data={filteredPokemon} />
      </Main>
    </PageLayout>
  );
}
