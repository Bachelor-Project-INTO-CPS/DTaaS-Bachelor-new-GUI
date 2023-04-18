import { render, screen } from '@testing-library/react';
import * as React from 'react';
import DTHistory from 'route/history/History';

describe('DTHistory', () => {
  beforeEach(() => {
    render(<DTHistory />);
  });

  it('renders', () => {
    expect(true);
  });

  it('renders RecentRuns and Logs components', () => {
    expect(screen.queryByText('recent-runs-mock')).toBeInTheDocument();
    expect(screen.queryByText('Logs-mock')).toBeInTheDocument();
  });
});
