import { NOT_FOUND_VARIANTS } from '@/constants';

type Props = { searchString?: string; isFavorite?: boolean };

const getNotFoundVariant = ({ isFavorite, searchString }: Props) => {
  if (searchString) return NOT_FOUND_VARIANTS.SEARCH;
  if (isFavorite) return NOT_FOUND_VARIANTS.FAVORITE;
  return NOT_FOUND_VARIANTS.DEFAULT;
};

export default getNotFoundVariant;
