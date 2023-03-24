import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Iframe from '../src/components/Iframe';

describe('Iframe', () => {
  beforeEach(() => {
    render(<Iframe url="https://example.com/" title="Example" />);
  });

  it('renders an iframe element with the correct src and title', () => {
    const iframe = screen.getByTitle('Example') as HTMLIFrameElement;
    expect(iframe.src).toBe('https://example.com/');
  });

  it('sets the iframe width to 100%', () => {
    const iframe = screen.getByTitle('Example') as HTMLIFrameElement;
    expect(iframe.width).toBe('100%');
  });

  it('sets the iframe height to 100% if fullsize prop is not provided', () => {
    const iframe = screen.getByTitle('Example') as HTMLIFrameElement;
    expect(iframe.style.height).toBe('100%');
    expect(iframe.style.flexGrow).toBe('');
  });
});

describe('Iframe fullsize', () => {
  it('sets the iframe height to auto if fullsize prop is provided', () => {
    render(<Iframe url="https://example.com/" title="Example" fullsize />);
    const iframe = screen.getByTitle('Example') as HTMLIFrameElement;
    expect(iframe.style.flexGrow).toBe('1');
    expect(iframe.style.height).toBe('');
  });
});
