import { render, screen, fireEvent } from '@testing-library/react';
import { PropsWithChildren } from 'react';

import Accordion from './Accordion';

jest.mock('framer-motion', () => ({
  motion: { div: ({ children }: PropsWithChildren) => <div>{children}</div> },
  AnimatePresence: ({ children }: PropsWithChildren) => <>{children}</>,
}));

const MOCK_ACCORDION_ITEM = { title: 'Test title', description: 'Test description' };
const { title, description } = MOCK_ACCORDION_ITEM;

const setup = () => render(<Accordion accordionItems={[MOCK_ACCORDION_ITEM]} />);

describe('Accordion', () => {
  it('should render correctly', () => {
    setup();

    const titleBlock = screen.getByText(title);

    expect(titleBlock).toBeVisible();
    expect(screen.queryByText(description)).not.toBeInTheDocument();

    fireEvent.click(titleBlock);

    const descriptionBlock = screen.getByText(description);

    expect(descriptionBlock).toHaveTextContent(description);
    expect(descriptionBlock).toBeVisible();
  });
});
