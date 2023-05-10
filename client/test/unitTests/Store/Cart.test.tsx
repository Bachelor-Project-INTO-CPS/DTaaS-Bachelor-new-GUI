import cartReducer, {
  CartState,
  addToCart,
  clearCart,
  removeFromCart,
} from 'store/CartStore/cart.slice';

describe('cartSlice', () => {
  let initialState: CartState;

  beforeEach(() => {
    initialState = {
      assets: [],
    };
  });

  it('should handle addToCart correctly', () => {
    const assetToAdd = { path: '/assets/1', isFolder: false };
    const action = addToCart(assetToAdd);
    const state = cartReducer(initialState, action);

    expect(state.assets).toContain(assetToAdd);
  });
  it('should not add duplicates with addToCart', () => {
    const assetToAdd = { path: '/assets/1', isFolder: false };
    const action = addToCart(assetToAdd);
    const stateFirstAction = cartReducer(initialState, action);
    const stateFinal = cartReducer(stateFirstAction, action);

    expect(stateFinal.assets.length).toEqual(1);
  });

  it('should handle removeFromCart correctly', () => {
    const assetToRemove = { path: '/assets/1', isFolder: false };
    initialState.assets = [assetToRemove];
    const action = removeFromCart(assetToRemove);
    const state = cartReducer(initialState, action);

    expect(state.assets).not.toContain(assetToRemove);
  });

  it('should handle clearCart correctly', () => {
    initialState.assets = [{ path: '/assets/1', isFolder: false }];
    const action = clearCart();
    const state = cartReducer(initialState, action);

    expect(state.assets).toHaveLength(0);
  });
});
