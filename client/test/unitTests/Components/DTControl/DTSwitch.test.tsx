import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DTSwitch from 'components/DTControl/DTSwitch';

describe('DTSwitch', () => {
  it('renders', () => {
    render(<DTSwitch DT={{ id: 0, name: 'DT1', running: true }} />);
    expect(true);
  });

  it('renders the content of the DT running', () => {
    const testDT = { id: 0, name: 'DT1', running: true };
    render(<DTSwitch DT={testDT} />);
    const name = screen.getByText(testDT.name);
    const DT1switch = screen.getByRole('switch', { name: `DT${testDT.id}` });
    expect(name).toBeInTheDocument();
    expect(DT1switch).toBeInTheDocument();
  });

  it('has the switch checked', () => {
    const testDT = { id: 0, name: 'DT1', running: true };
    render(<DTSwitch DT={testDT} />);
    const DT1switch = screen.getByRole('switch', { name: `DT${testDT.id}` });
    expect(DT1switch).toBeChecked();
  });

  it('renders the content of the DT stopped', () => {
    const testDT = { id: 0, name: 'DT1', running: false };
    render(<DTSwitch DT={testDT} />);
    const name = screen.getByText(testDT.name);
    const DT1switch = screen.getByRole('switch', { name: `DT${testDT.id}` });
    expect(name).toBeInTheDocument();
    expect(DT1switch).toBeInTheDocument();
  });

  it('has the switch checked', () => {
    const testDT = { id: 0, name: 'DT1', running: false };
    render(<DTSwitch DT={testDT} />);
    const DT1switch = screen.getByRole('switch', { name: `DT${testDT.id}` });
    expect(DT1switch).not.toBeChecked();
  });
});
