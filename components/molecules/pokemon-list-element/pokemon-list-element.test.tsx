import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-fetch';

import type { RenderResult } from '@testing-library/react';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { pokemonMockList } from 'services/pokemon/__mocks__/pokemon.mock';

import { PokemonListElement } from './pokemon-list-element';

describe('Pokemon List Element', () => {
  describe('Component', () => {
    const description = {
      flavor_text_entries: [{ flavor_text: 'a description' }],
    };

    beforeEach(() => {
      act(() => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockReturnValue(
            new Promise((resolve) => {
              setTimeout(() => resolve(description), 1000);
            })
          ),
        });
      });
    });

    test('renders content', async () => {
      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(() => {
        const title = component.getByText(pokemonMockList[0].name);
        expect(title).toBeDefined();
      });
    });

    test('has a Habitat', async () => {
      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(() => {
        const habitat = component.getByText(pokemonMockList[0].habitat.name);
        expect(habitat).toBeDefined();
      });
    });

    test('shows its types', async () => {
      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(() => {
        const mainType = component.getByText('grass');
        const secondaryType = component.getByText('poison');
        expect(mainType).toBeDefined();
        expect(secondaryType).toBeDefined();
      });
    });

    test('has a background pokeball', async () => {
      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(() => {
        const pokeball = component.getByAltText('Pokeball');
        expect(pokeball).toBeDefined();
      });
    });

    test('has pokemon image', async () => {
      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(() => {
        const pokemonImage = component.getByAltText(pokemonMockList[0].name);
        expect(pokemonImage).toBeDefined();
      });
    });

    test('has an index', async () => {
      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(() => {
        const pokemonImage = component.getByText(`#${pokemonMockList[0].id}`);
        expect(pokemonImage).toBeDefined();
      });
    });
  });

  describe('Description', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('displays a loading state', async () => {
      global.fetch = jest.fn().mockReturnValue(
        new Promise((resolve) => {
          setTimeout(() => resolve('a description'), 500);
        })
      );

      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(async () => {
        const loadingState = await component.findByText('loading description');
        expect(loadingState).toBeDefined();
      });
    });

    test('displays an error state', async () => {
      global.fetch = jest.fn().mockRejectedValue({
        flavor_text_entries: [{ flavor_text: 'a description' }],
      });

      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(async () => {
        const errorState = await component.findByText(
          'errors getting the description'
        );
        expect(errorState).toBeDefined();
      });
    });

    test('displays data', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          flavor_text_entries: [{ flavor_text: 'a description' }],
        }),
      });

      let component: RenderResult;

      act(() => {
        component = render(<PokemonListElement element={pokemonMockList[0]} />);
      });

      await waitFor(async () => {
        const data = await component.findByText('a description');
        expect(data).toBeDefined();
      });
    });
  });
});
