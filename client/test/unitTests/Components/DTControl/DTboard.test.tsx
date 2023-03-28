import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DTboard, { DTControl } from 'components/DTControl/DTboard';

jest.mock('components/DTControl/DTSwitch', () => ({
  default: ({ DT }: { DT: DTControl }) => (
    <>
      <div>DT: {DT.name}</div>
      <div>Status: {DT.status}</div>
    </>
  ),
}));

describe('DTboard', () => {
  it('renders with no DTs', () => {
    render(<DTboard />);
    const DTboardElement = screen.getByText('DTboard');
    expect(DTboardElement).toBeInTheDocument();
  });

  it('renders with 1 DT', () => {
    render(<DTboard />);
    const DTboardElement = screen.getByText('DTboard');
    expect(DTboardElement).toBeInTheDocument();
  });

  it('renders the content of 1 DT', () => {
    const DTs: DTControl[] = [{ id: 0, name: 'DT1', status: 'on' }];
    render(<DTboard DTs={DTs} />);
    const DT1 = screen.getByText('DT: DT1');
    const DT1Status = screen.getByText('Status: on');
    expect(DT1).toBeInTheDocument();
    expect(DT1Status).toBeInTheDocument();
  });

  it('renders with multiple DTs', () => {
    render(<DTboard />);
    const DTboardElement = screen.getByText('DTboard');
    expect(DTboardElement).toBeInTheDocument();
  });

  it('renders the content of multiple DTs', () => {
    const DTs: DTControl[] = [
      { id: 0, name: 'DT1', status: 'on' },
      { id: 1, name: 'DT2', status: 'off' },
      { id: 2, name: 'DT3', status: 'on' },
    ];
    render(<DTboard DTs={DTs} />);
    const DT1 = screen.getByText('DT: DT1');
    const DT2 = screen.getByText('DT: DT2');
    const DT3 = screen.getByText('DT: DT3');
    const DT1Status = screen.getByText('Status: off');
    const DT2Status = screen.getByText('Status: off');
    const DT3Status = screen.getByText('Status: off');
    expect(DT1).toBeInTheDocument();
    expect(DT2).toBeInTheDocument();
    expect(DT3).toBeInTheDocument();
    expect(DT1Status).toBeInTheDocument();
    expect(DT2Status).toBeInTheDocument();
    expect(DT3Status).toBeInTheDocument();
  });
});
