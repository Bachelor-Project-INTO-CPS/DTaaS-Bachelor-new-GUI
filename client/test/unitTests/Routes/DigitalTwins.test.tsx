import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DigitalTwins from 'route/digitaltwins/DigitalTwins';
import tabs from 'route/digitaltwins/DigitalTwinTabData';
import { act } from 'react-dom/test-utils';
import { mockURLforDT } from '../__mocks__/global_mocks';

describe('Digital Twins', () => {
  beforeEach(() => {
    render(<DigitalTwins />);
  });

  it('reder DigitalTwin', () => {
    expect(true);
  });

  it('should render labels of all tabs', () => {
    tabs.forEach((tab) => {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument();
    });
  });

  it('should render the Iframe component for the first tab with the correct title and URL', () => {
    const firstTabIframe = screen.getByTitle(tabs[0].label, { exact: false });
    expect(firstTabIframe).toBeInTheDocument();
    expect(firstTabIframe).toHaveAttribute('src', mockURLforDT);
  });

  it('should render the data clicked tab', () => {
    tabs.forEach((tab) => {
      const tabElement = screen.getByRole('tab', { name: tab.label });
      act(() => {
        tabElement.click();
      });
      expect(screen.getByText(tab.body)).toBeInTheDocument();

      // Expect the other tabs to not be rendered
      tabs
        .filter((otherTab) => otherTab.label !== tab.label)
        .forEach((otherTab) => {
          expect(screen.queryByText(otherTab.body)).not.toBeInTheDocument();
        });
    });
  });
});
