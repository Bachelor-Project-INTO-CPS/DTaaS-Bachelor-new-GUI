import * as React from 'react';
import { screen } from '@testing-library/react';
import Dashboard from 'route/dashboard/Dashboard';
import { InitRouteTests } from '../testUtils';

describe('Dashboard', () => {
  InitRouteTests(<Dashboard />);

  it('renders Chart and RecentRuns components', () => {
    expect(screen.queryByText('chart-mock')).toBeInTheDocument();
    expect(screen.queryByText('recent-runs-mock')).toBeInTheDocument();
  });
});
