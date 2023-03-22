import { render } from '@testing-library/react';
import * as React from 'react';
import Dashboard from '../src/route/dashboard/Dashboard';

describe('Dashboard', () => {
  it('renders Dashboard without crashing', () => {
    render(<Dashboard />);
    expect(true);
  });
});
