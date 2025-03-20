import { render, screen } from '@testing-library/react';

import Footer, { SOCIAL_LINKS_DATA } from './Footer';

const setup = () => render(<Footer />);

describe('Footer', () => {
  it('should render the logo correctly', () => {
    setup();

    const logo = screen.getByText('Link Shortener');
    expect(logo).toBeVisible();
  });

  it('should render all social links with correct attributes', () => {
    setup();

    SOCIAL_LINKS_DATA.forEach(({ href, ariaLabel }) => {
      const link = screen.getByLabelText(ariaLabel);

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('aria-label', ariaLabel);
    });
  });
});
