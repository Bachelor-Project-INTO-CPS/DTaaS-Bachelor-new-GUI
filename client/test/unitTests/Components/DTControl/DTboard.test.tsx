import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import DTboard, { DTControl } from 'components/DTControl/DTboard';

jest.mock('components/DTControl/DTSwitch', () => ({
  default: ({ DT }: { DT: DTControl }) => (
    <div data-testid={DT.id}>
      <div>{DT.name}</div>
      <div>Running: {DT.running ? 'true' : 'false'}</div>
    </div>
  ),
}));

describe('DTboard', () => {
  it('renders with no DTs', () => {
    render(<DTboard />);

    const DTboardElement = screen.getByText('Your Digital Twins', {
      exact: false,
      selector: 'h4',
    });
    const noDTsElement = screen.getByText('No DTs');

    expect(DTboardElement).toBeInTheDocument();
    expect(noDTsElement).toBeInTheDocument();
  });

  it('renders with 1 DT', () => {
    render(<DTboard DTs={[{ id: 0, name: 'DT1', running: true }]} />);

    const DTboardElement = screen.getByText('Your Digital Twins', {
      exact: false,
      selector: 'h4',
    });
    const noDTsElement = screen.queryByText('No DTs');

    expect(DTboardElement).toBeInTheDocument();
    expect(noDTsElement).not.toBeInTheDocument();
  });

  it('renders the content of 1 DT', () => {
    const DTs: DTControl[] = [{ id: 0, name: 'DT1', running: true }];
    render(<DTboard DTs={DTs} />);

    const DT1 = screen.getByTestId(DTs[0].id);
    const DT1Status = within(DT1).getByText('Running: true');

    expect(DT1).toBeInTheDocument();
    expect(DT1Status).toBeInTheDocument();
  });

  it('renders with multiple DTs', () => {
    const DTs: DTControl[] = [
      { id: 0, name: 'DT1', running: true },
      { id: 1, name: 'DT2', running: false },
      { id: 2, name: 'DT3', running: true },
    ];
    render(<DTboard DTs={DTs} />);

    const DTboardElement = screen.getByText('Your Digital Twins');

    expect(DTboardElement).toBeInTheDocument();
  });

  it('renders the content of multiple DTs', () => {
    const DTs: DTControl[] = [
      { id: 0, name: 'DT1', running: true },
      { id: 1, name: 'DT2', running: false },
      { id: 2, name: 'DT3', running: true },
    ];
    render(<DTboard DTs={DTs} />);

    const DT1 = screen.getByTestId(DTs[0].id);
    const DT2 = screen.getByTestId(DTs[1].id);
    const DT3 = screen.getByTestId(DTs[2].id);

    const DT1Status = within(DT1).getByText('Running: true');
    const DT2Status = within(DT2).getByText('Running: false');
    const DT3Status = within(DT3).getByText('Running: true');
    expect(DT1).toBeInTheDocument();
    expect(DT2).toBeInTheDocument();
    expect(DT3).toBeInTheDocument();
    expect(DT1Status).toBeInTheDocument();
    expect(DT2Status).toBeInTheDocument();
    expect(DT3Status).toBeInTheDocument();
  });
});
