import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from './page';
import { serviceInstance } from './services/hacker-news.service';

jest.mock('./services/hacker-news.service');

describe('Page', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch item ids on mount', async () => {
    const mockGetNewItemIds = jest.fn();
    serviceInstance.getNewItemIds = mockGetNewItemIds;
    mockGetNewItemIds.mockResolvedValue([1, 2, 3]);

    render(<Page />);

    await waitFor(() => expect(mockGetNewItemIds).toHaveBeenCalledTimes(1));
  });

  it('should display items when item ids are fetched', async () => {
    const mockGetNewItemIds = jest.fn();
    serviceInstance.getNewItemIds = mockGetNewItemIds;
    mockGetNewItemIds.mockResolvedValue([1, 2, 3]);

    const { container } = render(<Page />);

    await waitFor(() => expect(container.getElementsByClassName('ant-card').length).toBe(3));
  });

  it('should handle pagination change', async () => {
    const mockGetNewItemIds = jest.fn();
    serviceInstance.getNewItemIds = mockGetNewItemIds;
    mockGetNewItemIds.mockResolvedValue(Array.from({ length: 11 }, (_, i) => i + 1));

    const { container } = render(<Page />);

    await waitFor(() => expect(screen.getByText('1').parentElement).toHaveClass('ant-pagination-item-active'));
    await waitFor(() => expect(container.getElementsByClassName('ant-card').length).toBe(10));

    userEvent.click(screen.getByText('2'));

    await waitFor(() => expect(screen.getByText('2').parentElement).toHaveClass('ant-pagination-item-active'));
    await waitFor(() => expect(container.getElementsByClassName('ant-card').length).toBe(1));
  });
});