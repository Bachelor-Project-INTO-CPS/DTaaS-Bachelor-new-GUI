import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset, isEqual } from 'models/Asset';

export interface CartState {
  assets: Asset[];
}

const initState: CartState = {
  assets: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Asset>) => {
      if (!state.assets.find((asset) => isEqual(asset,action.payload)))
        state.assets.push(action.payload);
    },
    removeFromCart: (state: CartState, action: PayloadAction<Asset>) => {
      state.assets = state.assets.filter((asset) => !isEqual(asset,action.payload));
    },
    clearCart: (state: CartState) => {
      state.assets = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
