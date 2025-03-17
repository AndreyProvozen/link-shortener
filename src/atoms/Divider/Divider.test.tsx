import { render, screen } from '@testing-library/react';
import Divider from './Divider';
import { DIVIDER_TEST_IDS } from './testids';

const MOCK_PROPS = { text: 'or', className: 'test-class' };

const setup = () => render(<Divider {...MOCK_PROPS} />);

describe('Divider', () => {
  it('should render correctly', () => {
    setup();

    const text = screen.getByText(MOCK_PROPS.text);
    const container = screen.getByTestId(DIVIDER_TEST_IDS.CONTAINER);

    expect(text).toBeVisible();
    expect(container).toHaveClass(MOCK_PROPS.className);
  });
});
