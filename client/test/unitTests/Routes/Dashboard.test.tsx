import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from 'route/dashboard/Dashboard';

describe('Dashboard', () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it('renders Dashboard', () => {
    expect(true);
  });

  it('renders Chart and RecentRuns components', () => {
    expect(screen.queryByText('chart-mock')).toBeInTheDocument();
    expect(screen.queryByText('recent-runs-mock')).toBeInTheDocument();
  });
});
