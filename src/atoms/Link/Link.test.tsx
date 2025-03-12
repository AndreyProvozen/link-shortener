import { render, screen } from '@testing-library/react';
import Link from './Link';

const MOCK_PROPS = {
  href: '/test',
  children: 'Test-link-message',
  className: 'test-link-class',
  variant: 'primary' as const,
};

const setup = () => render(<Link {...MOCK_PROPS} />);

describe('Link', () => {
  it('renders without crashing', () => {
    setup();

    const link = screen.getByText(MOCK_PROPS.children);

    expect(link).toBeVisible();
    expect(link).toHaveClass(MOCK_PROPS.className);
    expect(link).toHaveAttribute('href', MOCK_PROPS.href);
  });
});
