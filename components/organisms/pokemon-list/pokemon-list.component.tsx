import { ErrorBoundary } from 'components/atoms/error-boundary/error-boundary.component';
import {
  PokemonListElement,
  PokemonListElementFallback,
} from 'components/molecules/pokemon-list-element/pokemon-list-element';
import type { Pokemon } from 'models/pokemon';
import React, { useMemo } from 'react';

import { Container } from './pokemon-list.styles';

interface Props {
  data: Pokemon[];
}

export const PokemonList = ({ data }: Props) => {
  const Elements = useMemo(
    () =>
      data.map((element) => (
        <ErrorBoundary
          key={element.name}
          fallbackComponent={PokemonListElementFallback}
        >
          <PokemonListElement key={element.name} element={element} />
        </ErrorBoundary>
      )),
    [data]
  );

  return <Container>{Elements}</Container>;
};
