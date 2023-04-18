import * as React from 'react';
import {
  act,
  getDefaultNormalizer,
  render,
  screen,
} from '@testing-library/react';
import Library from 'route/library/Library';
import tabs from 'route/library/LibraryTabData';
import { mockURLforLIB } from '../__mocks__/global_mocks';

describe('Library with no props', () => {
  beforeEach(() => {
    render(<Library />);
  });

  it('renders Library', () => {
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
    expect(firstTabIframe).toHaveAttribute('src', mockURLforLIB);
  });

  it('should render the data clicked tab', () => {
    tabs.forEach((tab) => {
      const tabElement = screen.getByRole('tab', { name: tab.label });
      act(() => {
        tabElement.click();
      });
      expect(
        screen.getByText(tab.body, {
          normalizer: getDefaultNormalizer({ collapseWhitespace: false }),
        })
      ).toBeInTheDocument();

      // Expect the other tabs to not be rendered
      tabs
        .filter((otherTab) => otherTab.label !== tab.label)
        .forEach((otherTab) => {
          expect(screen.queryByText(otherTab.body)).not.toBeInTheDocument();
        });
    });
  });
});
