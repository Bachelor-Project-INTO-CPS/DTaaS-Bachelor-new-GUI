import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DTSwitch from 'components/DTControl/DTSwitch';

describe('DTSwitch', () => {
  it('renders', () => {
    render(<DTSwitch DT={{ id: 0, name: 'DT1', status: 'on' }} />);
    expect(true);
  });

  it('renders the content of the DT on', () => {
    render(<DTSwitch DT={{ id: 0, name: 'DT1', status: 'on' }} />);
    const name = screen.getByText('DT1');
    const status = screen.getByText('on');
    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });

  it('renders the content of the DT off', () => {
    render(<DTSwitch DT={{ id: 0, name: 'DT1', status: 'off' }} />);
    const name = screen.getByText('DT1');
    const status = screen.getByText('off');
    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});
