import { render, screen } from '@testing-library/react';
import Button from './Button';

const MOCK_PROPS = { children: 'Test button', className: 'test-class', variant: 'primary' as const };

const setup = () => render(<Button {...MOCK_PROPS} />);

describe('Button', () => {
  it('should render correctly', () => {
    setup();

    const button = screen.getByText(MOCK_PROPS.children);

    expect(button).toBeVisible();
    expect(button).toHaveClass(MOCK_PROPS.className);
  });
});
