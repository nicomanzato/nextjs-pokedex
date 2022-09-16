import type { Type } from 'models/pokemon';

import { Container } from './pokemon-type.styles';

interface PokemonTypeProps {
  type: Type;
}

export const PokemonType = ({ type }: PokemonTypeProps) => {
  return <Container>{type.type.name}</Container>;
};
