import { render, screen, fireEvent } from '@testing-library/react';

import Input from './Input';

const MOCK_PROPS = { placeholder: 'Test input', className: 'test-input-class', variant: 'primary' as const };

const setup = () => render(<Input {...MOCK_PROPS} />);

describe('Input', () => {
  it('renders without crashing', () => {
    setup();

    const input = screen.getByPlaceholderText(MOCK_PROPS.placeholder);

    expect(input).toBeVisible();
    expect(input).toHaveClass(MOCK_PROPS.className);
  });

  it('accepts user input', () => {
    setup();

    const testValue = 'Test Value';

    const input = screen.getByPlaceholderText(MOCK_PROPS.placeholder);
    fireEvent.change(input, { target: { value: testValue } });

    expect(input).toHaveValue(testValue);
  });
});
