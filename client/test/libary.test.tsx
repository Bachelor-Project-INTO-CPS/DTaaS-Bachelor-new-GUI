import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Library from 'route/library/Library';

jest.mock('../src/route/library/Components', () => ({
  default: () => <div>LibComponents-mock</div>,
}));

describe('Library', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders Library', () => {
    render(<Library />);
    expect(true);
  });

  it('renders LibComponents', () => {
    render(<Library />);
    expect(screen.queryByText('LibComponents-mock')).toBeInTheDocument();
  });
});
