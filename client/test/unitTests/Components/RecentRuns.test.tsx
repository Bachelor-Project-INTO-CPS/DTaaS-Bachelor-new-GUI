import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import RecentRuns from 'components/RecentRuns';

jest.mock('components/RecentRuns', () => ({
  default: jest.requireActual('components/RecentRuns').default,
}));

describe('RecentRuns component', () => {
  beforeEach(() => {
    render(<RecentRuns />);
  });

  test('renders table with rows', () => {
    // Check if table headers exist
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  test('renders see more link', () => {
    // Check if see more link exists
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('prevents default action when see more link is clicked', () => {
    const seeMoreLink = screen.getByRole('link');
    // Simulate click event on see more link
    const clickEvent = createEvent.click(seeMoreLink);
    fireEvent(seeMoreLink, clickEvent);
    expect(clickEvent.defaultPrevented).toBeTruthy();
  });
});
