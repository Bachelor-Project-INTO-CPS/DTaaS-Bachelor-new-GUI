import { act, renderHook } from '@testing-library/react';
import { Asset } from 'models/Asset';
import useCart from 'store/CartAccess';
import { wrapWithInitialState } from '../testUtils';

describe('useCart', () => {
  const defaultRender = wrapWithInitialState();
  const testAsset: Asset = {
    path: '/assets/1',
    name: 'testAsset',
    isDir: false,
  };

  it('should handle addToCart correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper: defaultRender });

    act(() => {
      result.current.actions.add(testAsset);
    });

    expect(result.current.state.assets).toContain(testAsset);
  });

  it('should not add duplicates with addToCart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: defaultRender });

    act(() => {
      result.current.actions.add(testAsset);
    });
    act(() => {
      result.current.actions.add(testAsset);
    });

    expect(result.current.state.assets.length).toEqual(1);
  });

  it('should handle removeFromCart correctly', () => {
    const preLoadedState = wrapWithInitialState({
      cart: {
        assets: [testAsset],
      },
    });

    const { result } = renderHook(() => useCart(), { wrapper: preLoadedState });

    act(() => {
      result.current.actions.remove(testAsset);
    });

    expect(result.current.state.assets).not.toContain(testAsset);
  });

  it('should handle clearCart correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper: defaultRender });

    act(() => {
      result.current.actions.clear();
    });
    expect(result.current.state.assets).toHaveLength(0);
  });
});
