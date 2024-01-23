import { render, waitFor, screen } from '@testing-library/react';
import { serviceInstance } from './services/hacker-news.service';
import { ItemCard } from './item-card';

jest.mock('./services/hacker-news.service');

describe('ItemCard', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch item on mount', async () => {
    const mockGetItem = jest.fn();
    serviceInstance.getItem = mockGetItem;
    mockGetItem.mockResolvedValue({ id: 1, by: 'user', title: 'title', url: 'url' });

    render(<ItemCard id={1} />);

    await waitFor(() => expect(mockGetItem).toHaveBeenCalledTimes(1));
  });

  it('should display item when item is fetched', async () => {
    const mockGetItem = jest.fn();
    serviceInstance.getItem = mockGetItem;
    mockGetItem.mockResolvedValue({ id: 1, by: 'user', title: 'title', url: 'url' });

    render(<ItemCard id={1} />);

    await waitFor(() => expect(screen.getByText('user')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('title')).toBeInTheDocument());
  });
});