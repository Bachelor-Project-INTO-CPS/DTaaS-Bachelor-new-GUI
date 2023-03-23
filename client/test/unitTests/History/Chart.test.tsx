/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Chart from '../../../src/route/History/Chart';
import { ResizeObserverMock } from '../../mocks/ResizeObserverMock';
import 'resize-observer-polyfill';

describe('Chart', () => {
  it('renders title', () => {
    window.ResizeObserver =
    ResizeObserverMock as unknown as typeof ResizeObserver;
    render(<Chart />);
    const titleElement = screen.getByText('Observed Output');
    expect(titleElement);
  });

});




  