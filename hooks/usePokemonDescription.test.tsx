import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { usePokemonDescription } from './usePokemonDescription';

xdescribe('usePokemonDescription', () => {
  test('returns a loading state', async () => {
    global.fetch = jest.fn().mockReturnValue(
      new Promise((resolve) => {
        setTimeout(() => resolve('description'), 5000);
      })
    );

    let result: any;

    act(() => {
      result = renderHook(() =>
        usePokemonDescription('ditto', global.fetch)
      ).result;
    });

    await waitFor(() => {
      expect(result.current.props.children).toEqual('loading...');
    });
  });

  test('returns an error state', async () => {
    global.fetch = jest.fn().mockRejectedValue('an error occurred');

    let result: any;

    act(() => {
      result = renderHook(() =>
        usePokemonDescription('ditto', global.fetch)
      ).result;
    });

    await waitFor(() => {
      expect(result.current.props.children).toBe('failed to load');
    });
  });

  test('returns a value', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      flavor_text_entries: [{ flavor_text: 'description' }],
    });

    let result: any;

    act(() => {
      result = renderHook(() =>
        usePokemonDescription('ditto', global.fetch)
      ).result;
    });

    const data = result.current.props.children;

    await waitFor(() => data !== 'loading...');

    await waitFor(() => {
      expect(data).toEqual('description');
    });
  });
});
