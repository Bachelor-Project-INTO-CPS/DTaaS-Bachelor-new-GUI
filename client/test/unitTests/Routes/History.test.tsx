import { screen } from '@testing-library/react';
import * as React from 'react';
import DTHistory from 'route/history/History';
import { InitRouteTests } from '../testUtils';

describe('DTHistory', () => {
  InitRouteTests(<DTHistory />);

  it('renders RecentRuns and Logs components', () => {
    expect(screen.queryByText('recent-runs-mock')).toBeInTheDocument();
    expect(screen.queryByText('Logs-mock')).toBeInTheDocument();
  });
});
