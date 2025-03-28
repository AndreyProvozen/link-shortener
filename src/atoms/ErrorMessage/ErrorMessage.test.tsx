import { render, screen } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

const MOCK_PROPS = { children: 'test message', className: 'test-class' };

const setup = () => render(<ErrorMessage {...MOCK_PROPS} />);

describe('Divider', () => {
  it('should render correctly', () => {
    setup();

    const errorMessage = screen.getByText(MOCK_PROPS.children);

    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveClass(MOCK_PROPS.className);
  });
});
