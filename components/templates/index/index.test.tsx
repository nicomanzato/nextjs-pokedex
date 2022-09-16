import 'isomorphic-fetch';

import { fireEvent, render } from '@testing-library/react';
import * as hooks from 'hooks/useFetch';
import { pokemonMockList } from 'services/pokemon/__mocks__/pokemon.mock';

import HomeTemplate from './index.component';

jest.mock('next/router');

describe('Home Template', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useFetch').mockReturnValue({
      isLoading: false,
      hasErrors: false,
      data: { flavor_text_entries: [{ flavor_text: 'a description' }] },
    });
  });

  test('renders content', () => {
    const component = render(<HomeTemplate pokemonList={pokemonMockList} />);

    const button = component.getByText('Pokedex');
    expect(button).toBeDefined();
  });

  test('renders all elements', async () => {
    const component = render(<HomeTemplate pokemonList={pokemonMockList} />);

    const elements = await component.findAllByText(/#[0-9]/);
    expect(elements.length).toEqual(pokemonMockList.length);
  });

  test('filters elements', async () => {
    const component = render(<HomeTemplate pokemonList={pokemonMockList} />);

    const elements = await component.findAllByText(/#[0-9]/);
    expect(elements.length).toEqual(pokemonMockList.length);

    const input = component.getByPlaceholderText('Search here');
    fireEvent.change(input, { target: { value: 'char' } });
    const filteredElements = await component.findAllByText(/#[0-9]/);
    expect(filteredElements.length).toEqual(3);
  });
});
