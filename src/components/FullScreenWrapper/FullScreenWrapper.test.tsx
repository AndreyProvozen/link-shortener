import { act, render, screen } from '@testing-library/react';
import { FullScreenWrapper } from '..';
import { useRouter, NextRouter } from 'next/router';

const mockedUseRouter = useRouter as jest.Mock<Partial<NextRouter>>;

jest.mock('@/icons', () => ({
  HeroBackground: ({ blobsColor }: { blobsColor?: string }) => (
    <div data-testid="hero-background" style={{ backgroundColor: blobsColor }} />
  ),
}));

const MOCK_PROPS = { children: 'Test Content', blobsColor: '#330020' };

const setup = async () => await act(async () => render(<FullScreenWrapper {...MOCK_PROPS} />));

describe('FullScreenWrapper', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({ push: jest.fn() });
  });

  it('renders the children', async () => {
    await setup();

    const children = screen.getByText('Test Content');
    expect(children).toBeInTheDocument();
  });

  it('applies the correct blob color', async () => {
    await setup();
    const heroBackground = screen.getByTestId('hero-background');
    expect(heroBackground).toHaveStyle(`background-color: ${MOCK_PROPS.blobsColor}`);
  });
});
