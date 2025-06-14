import { fireEvent, render, screen } from '@testing-library/react';

import { useLinksList, useLinksListActions } from '@/providers/LinksListProvider';

import HeroSection from './HeroSection';

const PLACEHOLDER_MESSAGE = 'Paste the URL to be shortened';
const LONG_LINK = 'https://www.google.com';
const SKELETON_ID = 'links-list-skeleton';

jest.mock('@/providers', () => ({ useLinksList: jest.fn(), useLinksListActions: jest.fn() }));
jest.mock('@/components', () => ({ LinksListSkeleton: () => <div data-testid={SKELETON_ID} /> }));

const mockedUseLinksList = useLinksList as jest.Mock;
const mockedUseLinksListActions = useLinksListActions as jest.Mock;

const mockAddNewLink = jest.fn();
const mockToggleFavorite = jest.fn();

const setup = () => render(<HeroSection />);

describe('HeroSection', () => {
  mockedUseLinksListActions.mockReturnValue({ addNewLink: mockAddNewLink, toggleFavorite: mockToggleFavorite });
  mockedUseLinksList.mockReturnValue({ favoriteList: [], linksList: [], isLoading: false });

  it('renders heading and description', () => {
    setup();

    expect(screen.getByText('Link Shortener')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(PLACEHOLDER_MESSAGE)).toBeInTheDocument();
  });

  it('handles input change and submits form', () => {
    setup();

    const input = screen.getByPlaceholderText(PLACEHOLDER_MESSAGE);
    const submitButton = screen.getByText('generate link');

    fireEvent.change(input, { target: { value: LONG_LINK } });
    fireEvent.click(submitButton);

    expect(mockAddNewLink).toHaveBeenCalledWith(LONG_LINK, expect.any(Function));
  });

  it('renders loading skeleton when loading', () => {
    mockedUseLinksList.mockReturnValue({ favoriteList: [], linksList: [], isLoading: true });

    setup();

    expect(screen.getByTestId(SKELETON_ID)).toBeInTheDocument();
  });
});
