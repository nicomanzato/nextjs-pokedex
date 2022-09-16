import tw from 'twin.macro';

export const InputComponent = tw.input`
  bg-gray-50
  border
  border-gray-300
  text-gray-900
  text-sm
  rounded-lg
  block
  w-full
  p-2.5
  focus-visible:outline-none
  dark:bg-gray-700
  dark:border-gray-600
  dark:placeholder-gray-400
  dark:text-white
`;

export const Container = tw.div`
  min-height[80px]
`;

export const ErrorMessage = tw.span`
  text-red-500
  text-sm
`;
