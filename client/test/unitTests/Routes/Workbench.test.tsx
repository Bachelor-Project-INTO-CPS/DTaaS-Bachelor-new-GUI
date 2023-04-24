import * as React from 'react';
import { screen } from '@testing-library/react';
import { InitRouteTests } from '../testUtils';
import WorkBench from 'route/workbench/Workbench';

describe('Workbench', () => {
  InitRouteTests(<WorkBench />);

  it('displays buttons', () => {
    const buttons = screen.getByRole('button');
    expect(buttons).toBeInTheDocument();
  });
});
