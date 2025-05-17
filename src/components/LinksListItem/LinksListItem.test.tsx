import { fireEvent, render, screen } from '@testing-library/react';

import { MOCK_API_URL } from '@/constants';

import LinksListItem from './LinksListItem';
import { LINKS_LIST_ITEM_TEST_IDS } from './testIds';

const MOCK_PROPS = {
  toggleFavorite: jest.fn(),
  code: '12345-c2',
  url: 'https://test-url.com/123',
  clicked: 100,
  isExternalShortLink: false,
  isFavorite: true,
};

const setup = (props = {}) => render(<LinksListItem {...MOCK_PROPS} {...props} />);

describe('LinksListItem', () => {
  it('renders base sections', () => {
    setup();

    expect(screen.getByText(`${MOCK_API_URL}/${MOCK_PROPS.code}`)).toBeInTheDocument();
    expect(screen.getByText(MOCK_PROPS.url)).toBeInTheDocument();
    expect(screen.getByText(MOCK_PROPS.clicked)).toBeInTheDocument();

    const linkElement = screen.getByTestId(LINKS_LIST_ITEM_TEST_IDS.SHORT_LINK);
    expect(linkElement.getAttribute('href')).toBe(`/links/${MOCK_PROPS.code}`);
  });

  it('calls toggleFavorite on heart icon click', () => {
    setup();

    fireEvent.click(screen.getByTestId(LINKS_LIST_ITEM_TEST_IDS.FAVORITE));
    expect(MOCK_PROPS.toggleFavorite).toHaveBeenCalled();
  });

  it('renders heart-icon if isFavorite is true', () => {
    setup();

    const useElement = screen.getByTestId(LINKS_LIST_ITEM_TEST_IDS.FAVORITE_USE);
    expect(useElement.getAttribute('href')).toBe('#heart-icon');
  });

  it('renders heart-outline-icon if isFavorite is false', () => {
    setup({ isFavorite: false });

    const useElement = screen.getByTestId(LINKS_LIST_ITEM_TEST_IDS.FAVORITE_USE);
    expect(useElement.getAttribute('href')).toBe('#heart-outline-icon');
  });

  it('renders external link if isExternalShortLink is true', () => {
    setup({ isExternalShortLink: true });

    const linkElement = screen.getByTestId(LINKS_LIST_ITEM_TEST_IDS.SHORT_LINK);
    expect(linkElement.getAttribute('href')).toBe(`${MOCK_API_URL}/${MOCK_PROPS.code}`);
  });
});
