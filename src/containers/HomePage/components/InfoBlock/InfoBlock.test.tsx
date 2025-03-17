import { render, screen } from '@testing-library/react';

import InfoBlock from './InfoBlock';

const MOCK_PROPS = { btnHref: '/test-link', btnText: 'Button Text', title: 'Info Title' };

const setup = () => render(<InfoBlock {...MOCK_PROPS} />);

describe('InfoBlock', () => {
  it('renders InfoBlock component with correct props', () => {
    setup();

    const titleElement = screen.getByText(MOCK_PROPS.title);
    expect(titleElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('link', { name: MOCK_PROPS.btnText });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', MOCK_PROPS.btnHref);
  });
});
