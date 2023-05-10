import { renderHook } from '@testing-library/react';
import { useSelector } from 'react-redux';
import useCart from 'store/useCart';
import { addToCart, removeFromCart, clearCart } from 'store/CartStore/cart.slice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useCart', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReset();
  });

  it('should return cart state and actions', () => {
    const mockCartState = { assets: [{ path: '/assets/1', isFolder: false }] };

    
    const actions = {
      addToCart,
      removeFromCart,
      clearCart
    }
    const mockSelector = jest.fn().mockReturnValue(mockCartState);
    (useSelector as jest.Mock).mockImplementation(mockSelector);

    const { result } = renderHook(() => useCart());

    expect(result.current.state).toEqual(mockCartState);
    expect(result.current.actions).toEqual(actions);
  });
});