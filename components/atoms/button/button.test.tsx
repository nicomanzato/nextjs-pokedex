import { fireEvent, render } from '@testing-library/react';

import { Button } from './button.component';

describe('Button', () => {
  test('renders content', () => {
    const component = render(<Button>Hello World</Button>);

    const button = component.getByText('Hello World');

    expect(button).toBeDefined();
  });

  test('handles onClick correctly', () => {
    const mockHandler = jest.fn();

    const label = 'Hello World';

    const component = render(<Button onClick={mockHandler}>{label}</Button>);

    const button = component.getByText(label);

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalled();
  });
});
