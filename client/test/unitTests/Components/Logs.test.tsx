import * as React from 'react';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import Logs from 'route/history/Logs';

jest.mock('route/history/Logs', () => ({
  default: jest.requireActual('route/history/Logs').default,
}));

describe('Logs', () => {
  beforeEach(() => {
    render(<Logs />);
  });

  test('renders title', () => {
    const titleElement = screen.getByText(/Logs/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders body text', () => {
    const bodyElement = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(bodyElement).toBeInTheDocument();
  });

  test('renders "See more" link', () => {
    const linkElement = screen.getByText(/See more/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('prevents default action when "See more" link is clicked', () => {
    const seeMoreLink = screen.getByText('See more');
    // Simulate click event on see more link
    const clickEvent = createEvent.click(seeMoreLink);
    fireEvent(seeMoreLink, clickEvent);
    expect(clickEvent.defaultPrevented).toBeTruthy();
  });
});
