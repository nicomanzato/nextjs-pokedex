import type { PokemonType } from 'models/pokemon';
import { TypeToColor } from 'styles/type-to-color';
import tw, { styled } from 'twin.macro';

export const PokemonElementContainer = styled.div(
  ({ type }: { type: PokemonType }) => [
    tw`
    flex
    flex-row
    bg-gray-600
    p-0.5
    rounded-lg
    shadow-md
    relative
    transition-all
    min-height[160px]
    hover:shadow-2xl
    hover:cursor-pointer
    lg:p-3
    overflow-hidden
  `,
    TypeToColor[type],
  ]
);

export const ImageContainer = tw.div`
  flex-1
`;

export const BackgroundImage = tw.div`
  absolute
  z-0
  ltr:right-0
  rtl:left-0
  bottom-0
  w-32
`;

export const FrontImage = tw.div`
  z-0
  w-32
`;

export const Column = tw.div`
  flex-1
  m-3
`;

export const DetailColumn = tw.div`
  flex-1
  flex
  flex-col
  m-3
  justify-between
`;

export const PokemonTypeContainer = tw.div`
  flex
  flex-col
  mt-2
`;

export const Name = tw.h3`
  text-white
  capitalize
  text-lg
  font-bold
  
`;

export const Index = tw.span`
  text-white
  font-bold
  text-sm
`;

export const Habitat = tw.span`
  text-white
  font-bold
  text-xs
  text-center
  block
  mt-1
  capitalize
`;

export const Description = tw.span`
  text-white
  text-xs
  block
  my-4
`;
