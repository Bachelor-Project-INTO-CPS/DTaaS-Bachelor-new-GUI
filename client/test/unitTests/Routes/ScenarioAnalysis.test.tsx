import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import ScenarioAnalysis from 'route/scenarioAnalysis/ScenarioAnalysis';
import tabs from 'route/scenarioAnalysis/ScenarioAnalysisTabData';

describe('ScenarioAnalysis', () => {
  beforeEach(() => {
    render(<ScenarioAnalysis />);
  });

  it('renders ScenarioAnalysis', () => {
    expect(true);
  });

  it('should render labels of all tabs', () => {
    tabs.forEach((tab) => {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument();
    });
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
