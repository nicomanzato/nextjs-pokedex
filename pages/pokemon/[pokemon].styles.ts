import { TypeToColor } from 'styles/type-to-color';
import tw, { styled } from 'twin.macro';

export const Main = styled.main(
  ({ type }: { type: keyof typeof TypeToColor }) => [tw``, TypeToColor[type]]
);

export const Header = tw.div`
  p-8
  -mb-32
  flex
  flex-col
  md:flex-row
  md:min-w-full
  md:justify-between
  md:mb-0
`;

export const Title = tw.h1`
  text-4xl
  font-bold
  capitalize
  text-white
`;

export const PokemonTypesContainer = tw.div`
  flex
  flex-row
`;

export const PokemonTypeContainer = tw.div`
  flex
  flex-col
  mt-2
  mr-2
  min-width[60px]
`;

export const SummaryContainer = tw.div`
  bg-white
  min-h-full
  border-b-2
  rounded-t-lg
`;

export const PokemonMoveContainer = tw.div`
  flex
  flex-col
`;
