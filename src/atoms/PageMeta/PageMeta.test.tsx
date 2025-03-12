import { render } from '@testing-library/react';

import PageMeta from './PageMeta';
import { ReactNode } from 'react';

jest.mock('next/head', () => ({ children }: { children: ReactNode }) => <>{children}</>);

const MOCK_PROPS = { title: 'Test Title', description: 'Test Description' };

const setup = (props = {}) => render(<PageMeta {...MOCK_PROPS} {...props} />);

describe('PageMeta', () => {
  it('should render the title and description meta tags', () => {
    setup();

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    expect(document.title).toBe(MOCK_PROPS.title);
    expect(ogTitle).toHaveAttribute('content', MOCK_PROPS.title);

    expect(metaDescription).toHaveAttribute('content', MOCK_PROPS.description);
    expect(ogDescription).toHaveAttribute('content', MOCK_PROPS.description);
  });

  it('should render the noindex robots meta tag when noIndex is true', () => {
    setup({ noIndex: true });

    const robotsMeta = document.querySelector('meta[name="robots"]');
    expect(robotsMeta).toHaveAttribute('content', 'noindex');
  });

  it('should not render the robots meta tag when noIndex is false or not provided', () => {
    setup();

    const robotsMeta = document.querySelector('meta[name="robots"]');
    expect(robotsMeta).not.toBeInTheDocument();
  });
});
