import tw from 'twin.macro';

export const Container = tw.div`
  w-full
`;

export const ButtonComponent = tw.button`
  text-white
  border-none
  bg-red-700
  hover:bg-red-800
  hover:cursor-pointer
  focus:ring-4
  focus:outline-none
  focus:ring-red-300
  font-medium
  rounded-lg
  text-sm
  w-full
  sm:w-auto
  px-5
  py-2.5
  text-center
  disabled:opacity-70
  disabled:cursor-not-allowed
  dark:bg-red-600
  dark:hover:bg-red-700
  dark:focus:ring-red-800
`;
