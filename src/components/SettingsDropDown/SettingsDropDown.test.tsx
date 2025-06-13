import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter, type NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { MOCK_API_URL } from '@/constants';

import SettingsDropDown from './SettingsDropDown';

const mockedUseRouter = useRouter as jest.Mock<Partial<NextRouter>>;

const MOCK_PROPS = { code: 'test-link-code', onDelete: jest.fn() };
const PUSH_MOCK = jest.fn();

const setup = () => render(<SettingsDropDown {...MOCK_PROPS} />);

describe('SettingsDropDown', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({ push: PUSH_MOCK });
  });

  it('renders all dropdown items', () => {
    setup();

    const dropdownTrigger = screen.getByLabelText('Open link settings');
    fireEvent.click(dropdownTrigger);

    expect(screen.getByText('Copy')).toBeInTheDocument();
    expect(screen.getByText('Statistic')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('copies link to clipboard when "Copy" is clicked', () => {
    setup();

    const dropdownTrigger = screen.getByLabelText('Open link settings');
    fireEvent.click(dropdownTrigger);

    const copyItem = screen.getByText('Copy');
    fireEvent.click(copyItem);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(`${MOCK_API_URL}/${MOCK_PROPS.code}`);
    expect(toast.success).toHaveBeenCalledWith('Link copied successfully');
  });

  it('navigates to statistics page on "Statistic" click', async () => {
    setup();
    fireEvent.click(screen.getByLabelText('Open link settings'));

    const statItem = await screen.findByText('Statistic');
    fireEvent.click(statItem);

    expect(PUSH_MOCK).toHaveBeenCalledWith(`/links/${MOCK_PROPS.code}`);
  });

  it('calls onDelete when "Delete" is clicked', () => {
    setup();

    const dropdownTrigger = screen.getByLabelText('Open link settings');
    fireEvent.click(dropdownTrigger);

    const deleteItem = screen.getByText('Delete');
    fireEvent.click(deleteItem);

    expect(MOCK_PROPS.onDelete).toHaveBeenCalled();
  });
});
