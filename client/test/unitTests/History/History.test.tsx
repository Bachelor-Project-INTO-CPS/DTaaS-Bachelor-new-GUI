import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import * as React from 'react';
import 'resize-observer-polyfill';
import RecentRuns from 'route/history/RecentRuns';
import Logs from 'route/history/Logs';
import DTHistory from 'route/history/History';

jest.mock( 'route/history/RecentRuns');
jest.mock('route/history/Logs');

describe('DTHistory', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders RecentRuns and Logs components', () => {
    render(<DTHistory />);
    expect(RecentRuns).toHaveBeenCalled();
    expect(Logs).toHaveBeenCalled();
  });
});