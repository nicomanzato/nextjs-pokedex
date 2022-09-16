import { PokemonType } from 'components/atoms/pokemon-type/pokemon-type';
import { useFetch } from 'hooks/useFetch';
import type { Pokemon } from 'models/pokemon';
import Image from 'next/image';
import Link from 'next/link';
import type { PokemonSpecies } from 'pokedex-promise-v2';
import React, { useMemo } from 'react';

import {
  BackgroundImage,
  Column,
  Description,
  DetailColumn,
  FrontImage,
  Habitat,
  ImageContainer,
  Index,
  Name,
  PokemonElementContainer,
  PokemonTypeContainer,
} from './pokemon-list-element.styles';

export const PokemonListElement = ({ element }: { element: Pokemon }) => {
  const { data, isLoading, hasErrors } = useFetch<PokemonSpecies>(
    `https://pokeapi.co/api/v2/pokemon-species/${element.name}`
  );

  const PokemonTypes = useMemo(
    () =>
      element.types.map((type) => (
        <PokemonTypeContainer key={type.type.name}>
          <PokemonType type={type} />
        </PokemonTypeContainer>
      )),
    [element.types]
  );

  const type = useMemo(
    () => (element.types.length ? element.types[0].type.name : 'fire'),
    [element.types]
  );

  return (
    <Link href={`/pokemon/${element.name}`}>
      <PokemonElementContainer type={type}>
        <DetailColumn>
          <div>
            <Name>{element.name}</Name>
            {PokemonTypes}
            <Habitat>{element.habitat.name}</Habitat>
            <Description>
              {isLoading && <div>{'loading description'}</div>}
              {hasErrors && <div>{'errors getting the description'}</div>}
              {data && <div>{data.flavor_text_entries[0].flavor_text}</div>}
            </Description>
          </div>
          <Index>#{element.id}</Index>
        </DetailColumn>
        <Column>
          <ImageContainer>
            <BackgroundImage>
              <Image
                src={'/PokeBall.svg'}
                blurDataURL="/blur.png"
                placeholder="blur"
                alt="Pokeball"
                layout="intrinsic"
                width={300}
                height={300}
              />
            </BackgroundImage>
            <FrontImage>
              <Image
                width={300}
                height={300}
                alt={element.name}
                blurDataURL="/blur.png"
                placeholder="blur"
                src={element.sprites.front_default}
              />
            </FrontImage>
          </ImageContainer>
        </Column>
      </PokemonElementContainer>
    </Link>
  );
};

export const PokemonListElementFallback = ({ onTryAgain }: any) => {
  return (
    <PokemonElementContainer type="fire">
      <DetailColumn>
        <Name>This information is not available</Name>
        <button onClick={onTryAgain}>try again</button>
      </DetailColumn>
    </PokemonElementContainer>
  );
};
