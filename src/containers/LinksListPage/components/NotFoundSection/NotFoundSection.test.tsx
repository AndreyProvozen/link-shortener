import { render, screen } from '@testing-library/react';

import NotFoundSection from './NotFoundSection';

const MOCK_PROPS = { title: 'Test title', href: '/test', linkText: 'Create new link' };

const setup = () => render(<NotFoundSection {...MOCK_PROPS} />);

describe('NotFoundSection', () => {
  it('should render without errors', () => {
    setup();

    const title = screen.getByText(MOCK_PROPS.title);
    const linkText = screen.getByText(MOCK_PROPS.linkText);

    expect(title).toBeVisible();
    expect(linkText).toBeVisible();
    expect(linkText).toHaveAttribute('href', MOCK_PROPS.href);
  });
});
