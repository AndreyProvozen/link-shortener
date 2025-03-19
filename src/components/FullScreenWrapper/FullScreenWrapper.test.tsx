import { act, render, screen } from '@testing-library/react';
import { useRouter, NextRouter } from 'next/router';

import { BACKGROUND_VARIANTS, FullScreenWrapper } from '..';

const mockedUseRouter = useRouter as jest.Mock<Partial<NextRouter>>;

const MOCK_PROPS = { children: 'Test Content', patternColor: '#330020' };

const setup = async (props = {}) => await act(async () => render(<FullScreenWrapper {...MOCK_PROPS} {...props} />));

describe('FullScreenWrapper', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({ push: jest.fn() });
  });

  it('renders the children', async () => {
    await setup();

    const children = screen.getByText('Test Content');
    expect(children).toBeInTheDocument();
  });

  [
    { variant: BACKGROUND_VARIANTS.BLOB, testId: 'hero-bg-blob' },
    { variant: BACKGROUND_VARIANTS.WAVE, testId: 'hero-bg-wave' },
  ].forEach(({ variant, testId }) => {
    it(`applies the correct bg variant: ${variant}`, async () => {
      await setup({ backgroundVariant: variant });

      const heroBackground = screen.getByTestId(testId);
      expect(heroBackground).toBeInTheDocument();
    });
  });
});
